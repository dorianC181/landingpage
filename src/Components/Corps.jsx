import React, { useState } from "react";
import gitLogo from "../img/git.png";
import githubLogo from "../img/github.png";
import githubDesktopLogo from "../img/github-desktop.png";

function Corps({ section1, section2, section3 }) { 
  const [git, setGit] = useState(section1 || {
    title: "Git",
    description: "Git est un système de gestion de versions distribué permettant de suivre les modifications du code.",
    image: gitLogo
  });

  const [github, setGithub] = useState(section2 || {
    title: "GitHub",
    description: "GitHub est une plateforme d'hébergement de code basée sur Git, facilitant la collaboration.",
    image: githubLogo
  });

  const [githubDesktop, setGithubDesktop] = useState(section3 || {
    title: "GitHub Desktop",
    description: "GitHub Desktop est une application facilitant l'utilisation de GitHub sans terminal.",
    image: githubDesktopLogo
  });

  return (
    <section className="corps">
      <div className="section"> 
        <img src={git.image} alt={git.title} className="section-image" />
        <div className="section-content">
          <h2>{git.title}</h2>
          <p>{git.description}</p>
        </div>
      </div>

      <div className="section">
        <img src={github.image} alt={github.title} className="section-image" />
        <div className="section-content">
          <h2>{github.title}</h2>
          <p>{github.description}</p>
        </div>
      </div>

      <div className="section">
        <img src={githubDesktop.image} alt={githubDesktop.title} className="section-image" />
        <div className="section-content">
          <h2>{githubDesktop.title}</h2>
          <p>{githubDesktop.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Corps;