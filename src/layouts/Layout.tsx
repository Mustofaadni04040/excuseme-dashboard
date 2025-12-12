import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="grid grid-cols-12 min-h-screen mr-10">
      <div className="relative col-span-1">
        <Sidebar />
      </div>

      <main className="w-full p-6 col-span-11">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
