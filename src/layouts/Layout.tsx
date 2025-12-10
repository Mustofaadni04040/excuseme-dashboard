import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex relative">
      <Sidebar />

      <main className="flex-1 p-6 bg-slate-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
