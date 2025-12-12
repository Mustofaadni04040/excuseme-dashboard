import { X } from "lucide-react";
import { useIsMobile } from "../hooks/useMobile";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

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

      {/* DESKTOP NAV */}
      {!isMobile ? (
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
      ) : (
        <>
          {/* Hamburger Icon */}
          <button
            aria-label="Open mobile menu"
            onClick={() => setOpen(true)}
            className="p-2"
          >
            <img src="/assets/icons/menu.png" alt="" className="w-8 h-8" />
          </button>

          {/* Overlay */}
          {open && (
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />
          )}

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              aria-label="Close mobile menu"
              className="mb-6"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <ul className="flex flex-col gap-6 text-lg">
              {navUrl.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
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
          </div>
        </>
      )}
    </header>
  );
}
