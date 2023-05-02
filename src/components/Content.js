import React from 'react'
import "../styles/content.css"

const Content = () => {
  return (
    <div className="content">
      <a href="images/projets/charte.pdf" target="_blank"  rel="noopener noreferrer"><img src="images/projets/fm-reseaux.png" width="300" height="300" alt="Logo fm reseaux"/></a>
      <img src="images/projets/filmatest.png" width="300" height="300" alt="Logo Filmatest"/>
      <img src="images/projets/skii.png" width="600" height="600" alt="Logo Skii"/>
      <img src="images/projets/xi-fantastico.png" width="600" height="600" alt="Logo XI Fantastico"/>
      <img src="images/projets/us-lognes.png" width="300" height="300" alt="Maillot US Lognes"/>
      <img src="images/projets/us-lognes-2.png" width="300" height="300" alt="Maillot US Lognes 2"/>
      <video src="images/projets/flyer-joder.mp4" controls width="600" height="600"></video>
      <video src="images/projets/flyer-auto.mp4" controls width="600" height="600"></video>
    </div>
  )
}

export default Content