import React from 'react'
import "../styles/whoami.css";
import myselfSVG from "../images/me.svg";

const WhoAmI = () => {
  return (
    <div className="profile-container">
      <img src={myselfSVG} 
      alt="Jonathan BEA MBONG" />
      <div className="description">
        <h2>Mon parcours scolaire</h2>
        <ul>
          <li>
            <b>Cette année</b> | BTS SIO option SLAM au centre de formation de l'EMSCA<br/><b className="cities">Bussy-Saint-Georges (77600)</b>
          </li>
          <li>
            <b>Avant le BTS SIO</b> | Licence de mathématiques et d'informatique à l'UGE<br/> <b className="cities">Champs-sur-Marne (77420)</b>
          </li>
          <li>
            <b>Avant la licence</b> | Baccalauréat Scientifique au lycée Emily Brontë<br/> <b className="cities">Lognes (77185)</b>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WhoAmI