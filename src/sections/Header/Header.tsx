import "./Header.css";

import React from "react";

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { href: "#home", label: "Esasy sahypa", isActive: true },
  { href: "#education", label: "Oyunlar" },
  { href: "#services", label: "Hyzmatlar" },
  { href: "#testimonials", label: "Guwanamalar" },
  // { href: "#contact", label: "Sizden gelenler" }, // Eğer aktif hale getirmek isterseniz açabilirsiniz.
];

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo */}
      <a href="#home" className="logo">
        tm_<span>progers</span>
      </a>

      {/* Menu Icon */}
      <svg
        id="menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        aria-label="Menu Icon"
        role="img"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          fill="currentColor"
        />
      </svg>

      {/* Navigation Bar */}
      <nav className="navbar">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={item.isActive ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
