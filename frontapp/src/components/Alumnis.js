import React from "react";
import design from "./design1.png";
import alumni from "./alumni.png";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Conseils from "./Conseils.js";
import Formations from "./Formations.js"
import Offres from "./Offres.js";


const Alumnis = () => {
    const navigate = useNavigate();

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
                </nav>
              </header>

              <main id="alum-main">
                <div id="mooc">
                   <h2>Alumnis ESIEA</h2>
                </div>
                <p></p>
                <a href="https://esiea-alumni.fr/"><strong>la communauté des anciens élèves de l’Esiea</strong></a>
                <img
                  src={alumni}
                  alt="fond-alumni"
                  id="alum1"
                  style={{
                    width: '60%', // Ajuster la largeur de l'image à 100% de la largeur du conteneur parent
                   // height: 'auto', // Ajuster la hauteur de l'image de manière proportionnelle à la largeur
                    position: 'fixed', // Positionner l'image de manière fixe par rapport à la fenêtre du navigateur
                    top: 130, // Aligner l'image en haut de la fenêtre du navigateur
                    left: 350, // Aligner l'image à gauche de la fenêtre du navigateur
                   // zIndex: -1, // Envoyer l'image en arrière-plan par rapport au reste du contenu
                  }}
                />
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

export default Alumnis;
