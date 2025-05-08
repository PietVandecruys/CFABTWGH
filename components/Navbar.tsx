// components/Navbar.tsx
import UserGreetText from "@/components/UserGreetText";
import LoginButton from "@/components/LoginLogoutButton"; // Assuming LoginLogoutButton is your Login/Logout logic component

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md p-4">
      <div className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm lg:flex">
        {/* Greeting Component */}
        <UserGreetText />

        {/* Login Button - Fixed at bottom on small screens */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:bg-none">
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
