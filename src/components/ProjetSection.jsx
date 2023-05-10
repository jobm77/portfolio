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
            <h3>{project.titre}</h3>
            <p>{project.description}</p>
            <img src={project.url}alt="R"/>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ProjetSection;
