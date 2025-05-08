// app/page.tsx
import { createClientQuestions } from "@/utils/supabase/client";
import Layout from "@/components/Layout";
import Image from "next/image";

// Helper to format module names for URLs
function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Hardcoded image URL mapping based on module names
const getModuleImage = (moduleName: string) => {
  if (moduleName === "Statistics") return "/images/statistics.jpg";
  if (moduleName === "Probability Concepts") return "/images/probability.jpg";
  if (moduleName === "Portfolio Management") return "/images/pm.jpg";
  return "/images/default.jpg"; // Fallback image if no match
};

// Fetching modules directly in the page component (async)
const fetchModules = async () => {
  const supabase = createClientQuestions();

  // Fetch modules from Supabase (including module_name and description)
  const { data: modules, error } = await supabase
    .from("modules")
    .select("module_name, module_description") // Fetch module_name and description
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching modules:", error);
    return [];
  }

  return modules || [];
};

const HomePage = async () => {
  // Fetch the modules directly inside the component (server-side fetching)
  const modules = await fetchModules();

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Hero / Intro Section */}
        <section className="text-center py-16 bg-white">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to CFA Exam Prep
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Prepare thoroughly for your CFA exam with our innovative, interactive platform.
            Access up-to-date study materials, practice exams, and track your progress – all
            in one place.
          </p>
          <div className="flex justify-center">
          <Image
            src="/images/CFA-Exam-Prep.webp"
            alt="CFA Exam Preparation"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Why Choose Our Platform?
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our platform is designed to help you focus on the material that matters most.
              Practice with relevant questions, monitor your progress, and stay motivated.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive Quizzes</h4>
                <p className="text-gray-600">
                  Engage with dynamic quizzes and flashcards that adapt to your strengths and weaknesses.
                </p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Performance Analytics</h4>
                <p className="text-gray-600">
                  Gain insights into your progress with clear analytics and personalized study paths.
                </p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Up-to-Date Content</h4>
                <p className="text-gray-600">
                  All materials are regularly updated to ensure coverage of the latest CFA curriculum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Modules Section */}
        <section className="mt-16 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {modules.length > 0 ? (
              modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  {/* Module Image */}
                  <div className="mb-4 w-32 h-32 flex justify-center items-center overflow-hidden rounded-full border-4 border-blue-600">
                    <Image
                      src={getModuleImage(module.module_name)} // Use the hardcoded image URL
                      alt={module.module_name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Module Name */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{module.module_name}</h3>
                  <p className="text-gray-600 mb-4">{module.module_description}</p>
                </div>
              ))
            ) : (
              <p>No modules found.</p>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
