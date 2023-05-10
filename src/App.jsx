import './App.css';

import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MyName from './components/MyName';
import WhoAmI from './components/WhoAmI';
import PresentationBTS from './components/PresentationBTS';
import ProjetSection from './components/ProjetSection';
import Footer from './components/Footer'; 
import BackToTopButton from './components/BackToTopButton';




function App() {
  const projects = [
    {
      id: 1,
      titre: "Support bureautique / Helpdesk",
      description: 'jlhhj',
      url: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png"
    },
    {
      id: 2,
      titre: 'Logo Filmatest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscccccccing elit.',
      url: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png"
    },
    {
      id: 3,
      titre: 'Logo Filmatest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscccccccing elit.',
      url: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png"
    },
    // Ajouter plus de projets ici
  ];
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <MyName />
      <WhoAmI />
      <PresentationBTS />
      <ProjetSection projects={projects} />
      <Footer/>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
