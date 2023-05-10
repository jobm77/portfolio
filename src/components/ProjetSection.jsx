import React from "react";
import "../styles/projectSection.css"

const ProjetSection = ({ projects }) => {
  return (
    <>
      <div className="first-year">
        <h2>MES PROJETS DE 1ÈRE ANNÉE ? </h2>
        
      </div>
      <div className="second-year">
      <h2>MES PROJETS DE 2ÈME ANNÉE</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.url} alt=">Ressource non trouvée"/>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ProjetSection;
