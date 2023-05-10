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
import TechnologyWatch from './components/TechnologyWatch';
import quiz from "./images/quiz.png";




function App() {
  const projects = [
    {
      id: 1,
      title: "Mission 1 : Support bureautique / Helpdesk, dépannage et aménagement de postes de travail",
      url: "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_960_720.jpg"
    },
    {
      id: 2,
      title: 'Mission 2 : Installation et configuration d\'un serveur ESX VmWare',
      url: "https://cdn.pixabay.com/photo/2018/01/22/21/34/sever-3100049_960_720.jpg"
    },
    {
      id: 3,
      title: 'Mission 3 : Installation et configuration d\'une machine virtuelle Ubuntu pour la connecter sur le réseau de l\'entreprise',
      url: "https://cdn.pixabay.com/photo/2017/08/21/18/36/notebook-2666360_960_720.jpg"
    },
    {
      id: 4,
      title: 'Mission 4 : création d\'un quiz sur le thème des divers langages de programmations étudiés durant l\'année',
      url: `${quiz}`
    }
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
      <TechnologyWatch />
      <Footer/>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
