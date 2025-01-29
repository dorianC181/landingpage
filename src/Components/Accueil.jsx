import React, { useState } from "react";
import logo from "../img/Tutorial-Intermediate-RP (2).png";

function Accueil() {
  const [content, setContent] = useState({
  title: "Gérez votre code avec Git & GitHub",
  description: "Découvrez les outils essentiels pour le développement collaboratif.",
}); 

   return (
    <section className="Accueil" id="accueil">
      <div className="accueil-css">
        <div className="accueil2-css">
        <img src={logo} alt="Git" className="image-git"/>
        <h2>{content.title}</h2>
        <p>{content.description}</p>  
        </div>  
      </div>
    </section>  
  );
}


export default Accueil;