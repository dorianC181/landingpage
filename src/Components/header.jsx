import React, { useState } from "react";

function Header() {
  const [logoText, setLogoText] = useState("Git & GitHub");
  const [accueil, setAccueil] = useState({ href: "#accueil", label: "Accueil" });
  const [corps, setCorps] = useState({ href: "#corps", label: "Fonctionnalités" });
  const [contact, setContact] = useState({ href: "#contact", label: "Contact" });

  return (
    <header className="navbar">
      <div className="logo">{logoText}</div>
      <nav>
        <ul className="nav-links">
          <li><a href={accueil.href}>{accueil.label}</a></li>
          <li><a href={corps.href}>{corps.label}</a></li>
          <li><a href={contact.href}>{contact.label}</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
  