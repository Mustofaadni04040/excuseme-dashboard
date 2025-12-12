import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navUrl = [
    { to: "/", label: "home" },
    { to: "/support", label: "support" },
    { to: "/my-account", label: "my account" },
  ];

  return (
    <header className="max-w-[1200px] mx-auto flex items-center justify-between my-4">
      <a href="/" className="block">
        <img
          src="/logo.png"
          alt="Brand Logo"
          className="w-36 h-auto object-contain"
        />
      </a>

      <nav className="flex items-center gap-16">
        <ul className="flex items-center gap-6">
          {navUrl.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button aria-label="Open menu">
          <img src="/assets/icons/menu.png" alt="" className="w-8 h-8" />
        </button>
      </nav>
    </header>
  );
}
