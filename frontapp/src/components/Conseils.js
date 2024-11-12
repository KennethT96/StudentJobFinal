import React from "react";
import design from "./design1.png";
import coach from"./coach.png";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Offres from "./Offres.js";
import Alumnis from "./Alumnis.js"
import Formations from "./Formations.js"

const Conseils = () => {
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

        <main id="cons-main">
        <form id="cons-form1">
          <div>
            <h3>Conseils pour la recherche</h3>
            <p>Voici quelques conseils utiles pour votre recherche d'emploi :</p>
            <ul>
              <li>Mettez à jour votre CV régulièrement.</li>
              <li>Réseautez avec des professionnels de votre secteur.</li>
              <li>Personnalisez votre lettre de motivation pour chaque candidature.</li>
              <li>Préparez-vous pour les entretiens en faisant des recherches sur l'entreprise.</li>
              <li>N'hésitez pas à suivre des formations pour améliorer vos compétences.</li>
            </ul>
          </div>

          <div>
            <h3>Liens utiles</h3>
            <p>Voici quelques liens utiles pour vous aider dans votre recherche d'emploi :</p>
            <ul>
              <li><a href="https://www.linkedin.com/">LinkedIn</a> - Réseau professionnel</li>
              <li><a href="https://esiea-alumni.fr/">Plateforme Alumni Esiea</a> - la plateforme dédiée à la communauté des anciens élèves de l’Esiea </li>
              <li><a href="https://fr.indeed.com/?from=gnav-compui">Indeed</a> - Moteur de recherche d'emplois</li>
              <li><a href="https://www.glassdoor.com/index.htm">Glassdoor</a> - Informations sur les entreprises et les salaires</li>
              <li><a href="https://www.monster.com/">Monster</a> - Site de recherche d'emploi</li>
              <li><a href="https://www.careerbuilder.com/">CareerBuilder</a> - Plateforme de recherche d'emploi</li>
            </ul>
          </div>

           <div>
              <h3>Contrats de travail et heures de travail</h3>
              <p>Comprendre les différents types de contrats de travail et le nombre d'heures de travail peut être crucial dans votre recherche d'emploi :</p>
              <ul>
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/F2673">Contrats de travail en France</a> - Informations sur les types de contrats de travail en France.</li>
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/F2264">Durée légale du travail en France</a> - Nombre d'heures de travail par semaine en fonction du type de contrat.</li>
              </ul>
            </div>

            <div>
              <h3>Grandes entreprises de technologie de l'information (TI)</h3>
              <p>Explorer les opportunités d'emploi dans les grandes entreprises de technologie de l'information peut être bénéfique pour votre carrière :</p>
              <ul>
                <li><a href="https://www.glassdoor.fr/Top-Entreprises-TI-France">Top entreprises de technologie de l'information en France</a> - Classement des meilleures entreprises de TI en France.</li>
                <li><a href="https://www.forbes.com/sites/forbestechcouncil/2022/01/27/the-top-10-tech-companies-to-work-for-in-2022/?sh=11d23de35ed9">Top 10 des entreprises technologiques où travailler en 2022</a> - Classement mondial des meilleures entreprises technologiques à travailler.</li>
              </ul>
            </div>
           </form>

           <form id="cons-form2">
              <h3>Coachs Professionnels</h3>
              <p>Nous mettons également à votre disposition des coachs professionnels afin de vous aider à discerner vos capacités pour pouvoir les mettre en avant notamment lors d'entretien. Cela vous permettra d'être plus à l'aise pendant des entretiens, ainsi que vous rajouter la capacité de pouvoir vous vendre aux entreprises.</p>
             <div class="expert">
                 <img src={coach} alt="Coach professionnel" id="coach" />
                 <div class="expert-info">
                     <p><strong>Jean-Pascal Pélissier</strong></p>
                     <p>Expert en coaching professionnel depuis 10 ans.</p>
                     <p>Email: jeanpascal@gmail.com</p>
                     <p>Téléphone: +33786923654</p>
                 </div>
                 <img src={coach} alt="Coach professionnel" id="coach" />
                 <div class="expert-info">
                     <p><strong> Lisa Poisier</strong></p>
                     <p>Experte en coaching professionnel depuis 6 ans.</p>
                     <p>Email: lisa.poisier@gmail.com</p>
                     <p>Téléphone: +33688003556</p>
                 </div>
             </div>
           </form>



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

export default Conseils;
