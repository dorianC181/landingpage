import React, { useState } from "react";

function Footer() {
  const [accueil, setAccueil] = useState({ href: "#accueil", label: "Accueil" });
  const [features, setFeatures] = useState({ href: "#features", label: "Fonctionnalités" });
  const [contact, setContact] = useState({ href: "#contact", label: "Contact" });

  return (
    <footer className="footer">
      <nav>
        <ul className="footer-links">
          <li><a href={accueil.href}>{accueil.label}</a></li>
          <li><a href={features.href}>{features.label}</a></li>
          <li><a href={contact.href}>{contact.label}</a></li>
        </ul>
      </nav>
      <p>&copy;2025 Git & GitHub. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
