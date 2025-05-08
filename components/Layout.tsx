// components/Layout.tsx
import UserGreetText from "@/components/UserGreetText";
import LoginButton from "@/components/LoginLogoutButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-center">CFA Exam Prep</h1>
        </div>
      </header>

      {/* Navbar */}
        <nav className="shadow-md p-4">
            <div className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm lg:flex">
                {/* Greeting Component */}
                <UserGreetText />

                {/* Login Button - Fixed at bottom on small screens */}
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t lg:static lg:h-auto lg:bg-none">
                <LoginButton />
                </div>
            </div>
        </nav>

      {/* Main content */}
      <main className="container mx-auto flex-grow px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4 text-center">
          © {new Date().getFullYear()} CFA Exam Prep. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
