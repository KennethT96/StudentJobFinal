import React from "react";
import design from "./design1.png";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Conseils from "./Conseils.js";
import Alumnis from "./Alumnis.js"
import Formations from "./Formations.js"

const Offres = () => {
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

          <main id="offre-main">
            <h3>Offres d'emploi</h3>
              <form id="filter-form">
                <label htmlFor="contract-type">Type de contrat :</label>
                <select id="contract-type">
                  <option value="">Tous les types</option>
                  <option value="stage">Stage</option>
                  <option value="alternance">Alternance</option>
                  <option value="cdd">CDD</option>
                  <option value="cdi">CDI</option>
                </select>

                <label htmlFor="domain">Domaine :</label>
                <select id="domain">
                  <option value="">Tous les domaines</option>
                  <option value="data">Data</option>
                  <option value="software">Software</option>
                  <option value="cybersecurite">Cybersécurité</option>
                  <option value="systemes-embarques">Systèmes Embarqués</option>
                  <option value="realite-virtuelle">Réalité Virtuelle</option>
                </select>

                <label htmlFor="location">Ville/Pays :</label>
                <input type="text" id="location" placeholder="Entrez une ville ou un pays" />

                <button type="submit">Filtrer</button>
              </form>

            <div>
                <h5>IA & Data</h5>
                <ul>
                  <li><a href="https://www.entreprise-data1.com/">Data Analyst - Entreprise Data1</a> (CDI)</li>
                  <li><a href="https://www.entreprise-data2.com/">Data Scientist - Entreprise Data2</a> (Stage)</li>
                </ul>
            </div>
            <div>
                <h5>Software</h5>
                <ul>
                  <li><a href="https://www.entreprise-software1.com/">Développeur Full Stack - Entreprise Software1</a> (CDI)</li>
                  <li><a href="https://www.entreprise-software2.com/">Ingénieur Logiciel - Entreprise Software2</a> (Alternance)</li>
                </ul>
            </div>
            <div>
                <h5>Cybersecurité</h5>
                <ul>
                  <li><a href="https://www.entreprise-cyber1.com/">Analyste en Sécurité Informatique - Entreprise Cyber1</a> (CDD)</li>
                  <li><a href="https://www.entreprise-cyber2.com/">Ingénieur Cybersecurité - Entreprise Cyber2</a> (CDI)</li>
                </ul>
            </div>
            <div>
                <h5>Systèmes Embarqués</h5>
                <ul>
                  <li><a href="https://www.entreprise-systeme1.com/">Ingénieur Systèmes Embarqués - Entreprise Système1</a> (Stage)</li>
                  <li><a href="https://www.entreprise-systeme2.com/">Développeur Firmware - Entreprise Système2</a> (CDI)</li>
                </ul>
            </div>
            <div>
                <h5>Réalité Virtuelle</h5>
                <ul>
                  <li><a href="https://www.entreprise-vr1.com/">Développeur VR/AR - Entreprise VR1</a> (Alternance)</li>
                  <li><a href="https://www.entreprise-vr2.com/">Designer Expérience Utilisateur - Entreprise VR2</a> (CDI)</li>
                </ul>
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

export default Offres;
