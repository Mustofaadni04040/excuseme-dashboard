import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="lg:grid lg:grid-cols-12 min-h-screen lg:mr-10">
      <div className="lg:relative lg:col-span-1">
        <Sidebar />
      </div>

      <main className="w-full p-6 lg:col-span-11">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
