import React from "react";
import design from "./design1.png";
import job from "./jobs.jpg";
import Find from "./Find.png";
import AuthService from "../services/AuthService";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Conseils from "./Conseils.js";
import Offres from "./Offres.js";
import Alumnis from "./Alumnis.js"
import Formations from "./Formations.js"
//import AuthComponent from "./AuthComponent.js";

const Accueil = () => {
  const authService = new AuthService();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };


  return (
    <div>
      <header>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={design} alt="StudentJob" id="logo" />
           <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ marginRight: '60px' }} onClick={() => navigate('/conseils')}>Conseils & Entretiens</button>
            <button style={{ marginRight: '60px' }} onClick={() => navigate('/offres')}>Offres d emploi</button>
            <button style={{ marginRight: '60px' }} onClick={() => navigate('/alumnis')}>Nos Alumnis</button>
            <button style={{ marginRight: '60px' }} onClick={() => navigate('/formations')}>Nos Formations</button>
           </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '10px' }}>Vous êtes connecté !</p>
            <button onClick={handleLogout} style={{ backgroundColor: 'red' }}>Déconnexion</button>
          </div>
        </nav>
      </header>

      <main id="acc-main">
      <div style={{ display: 'flex',  }}>
        <img
          src={job}
          id="page1"
          alt="Job"
          style={{  width: "850px", float: "left", marginRight: "10px" }}
        />
        <div>
           <img
              src={Find} // Chemin de l'autre image à afficher
              alt="find job"
               style={{ width: "500px", height: "30vh",alignItems: 'center' }} // Ajuster la taille de l'image et la marge à droite
           />
           <div>
                      <h2>Préparez-vous à
                          décrocher votre job !</h2>
                   </div>
        </div>
        </div>

        <Routes>
            <Route path="/conseils" element={<Conseils />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/alumnis" element={<Alumnis />} />
            <Route path="/formations" element={<Formations />} />
        </Routes>
      </main>
      <footer>
        <a href=" " className="footer-link">
          Contact
        </a>

        <a href=" " className="footer-link">
          Tel: +33 669988554
        </a>

        <a href=" " className="footer-link">
          Email: StudentJob@et.esiea.fr
        </a>
        <p>© 2024 Mon Site Web. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Accueil;