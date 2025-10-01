import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center p-2 bg-green-100 border-b-2">
        <div className="flex items-center w-1/2 justify-start ml-2">
          <Logo />
        </div>
        <div className="flex items-center w-1/2 justify-end mr-10">
          <Navigation />
        </div>
      </div>

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="flex justify-center p-2 bg-green-100 border-t-2 fixed bottom-0 w-full">
        <p>© {new Date().getFullYear()} Kids Genius. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
