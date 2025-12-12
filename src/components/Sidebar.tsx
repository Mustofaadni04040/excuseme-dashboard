import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { to: "/", icon: "home", label: "Dashboard" },
    { to: "/messages", icon: "bag", label: "Messages" },
    { to: "/analytics", icon: "diagram", label: "Analytics" },
    { to: "/reports", icon: "pie", label: "Reports" },
    { to: "/settings", icon: "box", label: "Settings" },
  ];

  return (
    <div className="w-full md:w-14 h-14 md:h-fit fixed bottom-5 left-0 md:top-[50%] md:translate-y-[-50%] z-50 px-8 bg-primary shadow-md shadow-slate-500 rounded-full flex flex-row items-center justify-between md:flex-col md:py-6 md:space-y-4">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `p-2 md:p-3 rounded-full hover:bg-[#88C6FF66] transition ${
              isActive ? "bg-[#88C6FF66]" : ""
            }`
          }
        >
          <img
            className="w-4 h-4 md:w-6 md:h-6 object-contain block max-w-none"
            src={`/assets/icons/${item.icon}.png`}
            alt=""
          />
        </NavLink>
      ))}
    </div>
  );
}
