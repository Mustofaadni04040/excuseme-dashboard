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
    <div className="w-14 h-fit absolute left-0 top-[50%] translate-y-[-50%] px-8 bg-primary shadow-md shadow-slate-500 rounded-full flex flex-col items-center py-6 space-y-4">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `p-3 rounded-full hover:bg-[#88C6FF66] transition ${
              isActive ? "bg-[#88C6FF66]" : ""
            }`
          }
        >
          <img
            className="w-6 h-6 object-contain block max-w-none"
            src={`/assets/icons/${item.icon}.png`}
            alt=""
          />
        </NavLink>
      ))}
    </div>
  );
}
