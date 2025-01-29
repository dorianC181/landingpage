import React from "react";
import Accueil from "./Components/Accueil";
import "./App.css";
import Header from "./Components/header";
import Corps from "./Components/Corps";
import Footer from "./Components/footer";
import gitLogo from "./img/git.png";
import githubLogo from "./img/github.png";
import githubDesktopLogo from "./img/github-desktop.png";

function App() {
  return (
    <>
      <Header />
      <Accueil />
      <Corps
        section1={{ title: "Git", description: "Git est un système de gestion de versions distribué (VCS - Version Control System) conçu pour suivre l’évolution du code source dans un projet. Il permet aux développeurs de travailler ensemble, gérer les modifications du code et conserver un historique détaillé des changements.", image: gitLogo }}
        section2={{ title: "GitHub", description: "GitHub est une plateforme d’hébergement de code qui permet aux développeurs de stocker, gérer et collaborer sur des projets logiciels en utilisant Git. Il offre une interface web intuitive ainsi que de nombreux outils pour faciliter la gestion du code source et le travail en équipe.", image: githubLogo }}
        section3={{ title: "GitHub Desktop", description: "GitHub Desktop est une application de bureau qui permet aux développeurs d'utiliser GitHub sans avoir à utiliser la ligne de commande. Elle offre une interface graphique intuitive pour gérer ses dépôts Git localement, synchroniser ses projets avec GitHub et collaborer facilement avec une équipe.", image: githubDesktopLogo }}
      />
      <Footer />
    </>
  );
}

export default App;
