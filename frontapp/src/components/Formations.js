import React from "react";
import design from "./design1.png";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Conseils from "./Conseils.js";
import Alumnis from "./Alumnis.js"
import Offres from "./Offres.js";


const Formations = () => {
     const navigate = useNavigate();

  return (
          <div>
            <header>
              <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src={design} alt="StudentJob" id="logo" />
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button style={{ marginRight: '80px' }} onClick={() => navigate('/conseils')}>Conseils & Entretiens</button>
                  <button style={{ marginRight: '80px' }} onClick={() => navigate('/offres')}>Offres d emploi</button>
                  <button style={{ marginRight: '80px' }} onClick={() => navigate('/alumnis')}>Nos Alumnis</button>
                  <button style={{ marginRight: '80px' }} onClick={() => navigate('/formations')}>Nos Formations</button>
                 </div>
              </nav>
            </header>

            <main id="form-main">
              <div id="mooc">
                  <h2>AutoFormation (MOOC, Certifications, Ateliers)</h2>
              </div>
              <p></p>
              <a style={{color: "blue"}} href="https://www.oreilly.com/member/login/?next=https%3A//learning.oreilly.com/courses/">Cours sur la plateforme numérique Oreilly</a>
              <ul>
                 <li>À travers l'abonnement "ESIEA", vous avez accès gratuitement aux cours proposés sur cette plateforme. Vous pouvez cumuler les cours afin d'atteindre le volume minimal de travail requis pour une activité (>= 10h). Ne choisissez que parmi les cours de niveau "intermédiaire" ou "avancé".</li>
              </ul>
              <p></p>
              <h5><u>RSE - Éthique - Propriété intellectuelle (PI) - RGPD - Esprit de Défense</u></h5>
              <ul>
                  <li><a href="https://www.eformation-inrs.fr/formation/8">Prévention des risques professionnels</a> - INRS/CRAMIF - Gratuit</li>
                  <li><a href="https://catalogue.edulib.org/fr/cours/polymtl-ddi101/">L'ingénieur, source de solutions durables</a> - Edulib (Canada) - 18h - Gratuit</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6112876-initiez-vous-a-lethique-de-lingenierie-dans-le-numerique">Éthique de l'ingénierie dans le numérique</a> - OpenClassroom - 15h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://mooc-inpi.edunao.com/">Comprendre la propriété intellectuelle (PI)</a> - Académie INPI - Gratuit - 8h - Inutile si vous comptez vous inscrire en 5A à la mineure "I2ED" (Intelligence Économique et Esprit de Défense)</li>
                  <li><a href="https://www.drsd.defense.gouv.fr/la-protection-du-secret-de-la-defense-nationale">Protection du Secret de la Défense Nationale</a> - DRSD - Module "habilitation Secret Défense" + module "Informations et supports classifiés" - Hors majeure cybersécurité - Gratuit</li>
              </ul>
              <h5><u>Langages - algorithmes</u></h5>
              <ul>
                  <li><a href="https://www.coursera.org/learn/analysis-of-algorithms">Analyse de la complexité des algorithmes</a> - Coursera - 20h - Gratuit 7jours (puis 40€/mois)</li>
                  <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">JavaScript Algorithms and Data Structures</a> - freeCodeCamp - Compte pour 2 activités (> 50h) - Gratuit</li>
                  <li><a href="https://www.udemy.com/course/developpeur-python-formation-complete/?couponCode=LETSLEARNNOW">Développeur Python</a> - Udemy - Compte pour 2 activités (> 30h) - 35€</li>
                  <li><a href="https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python">Apprenez la programmation orientée objet avec Python</a> - OpenClassroom - 12h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot">Créez une application Java avec Spring Boot</a> - OpenClassrooms - 8h - Gratuit (certificat : 20€/mois)</li>
              </ul>
              <h5><u>Développement WEB et mobiles</u></h5>
              <ul>
                  <li><a href="https://www.coursera.org/learn/analysis-of-algorithms">Débutez avec les API REST + UX design </a> : découvrez les fondamentaux - OpenClassrooms - 15h (6h + 8h) - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">API and microservices (node.js + mongodb)</a> - freeCodeCamp - Compte pour 2 activités (> 50h) - Gratuit</li>
                  <li><a href="https://www.udemy.com/course/developpeur-python-formation-complete/?couponCode=LETSLEARNNOW">Débutez avec React</a> - OpenClassrooms - 8h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python">Créez une application WEB avec Vue.js</a> - OpenClassrooms - 20h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot">Introduction à Jquery</a>- OpenClassrooms - 8h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://www.udemy.com/course/developpeur-python-formation-complete/?couponCode=LETSLEARNNOW">Débutez avec Angular</a> - OpenClassrooms - 10h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python">Complétez vos connaissances sur Angular</a> - OpenClassrooms - 8h - Gratuit (certificat : 20€/mois)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot">Front End Development Libraries (bootstrap + jquery + sass + react)</a>  - freeCodeCamp - Compte pour 2 activités (> 50h) - Gratuit</li>
              </ul>
              <h5><u>IA, Data science & Dataviz</u></h5>
              <ul>
                  <li><a href="https://www.coursera.org/learn/analysis-of-algorithms">Introduction au langage Prolog</a> - ESIEA (Guillaume NOLLET) - Uniquement S7 pour la majeure IA - S7 ou S8 pour les autres - Gratuit</li>
                  <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">Spécialisation Analyse et interprétation de données</a> - Coursera - Gratuit 7jours (puis 40€/mois)</li>
                  <li><a href="https://www.udemy.com/course/developpeur-python-formation-complete/?couponCode=LETSLEARNNOW">Spécialisation Science des données</a>  - Coursera - Gratuit 7jours (puis 40€/mois) - Hors majeure IA-DATA</li>
                  <li><a href="https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python">Data analysis with Python Certification</a> - freeCodeCamp - 50h (compte pour 2 activités)  - Gratuit</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot">Machine learning with Python Certification</a> - freeCodeCamp - 50h (compte pour 2 activités) - Gratuit</li>
                  <li><a href="https://www.udemy.com/course/developpeur-python-formation-complete/?couponCode=LETSLEARNNOW">Analyzing Data with Python</a> - edX - 15h - Gratuit (certification payante)</li>
                  <li><a href="https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python">Python for Data Science</a> - edX</li>
                  <li><a href="https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot">Data science et machine learning - Masterclass Python </a> - Udemy - 27h (compte pour 2 activités) - 15€ - Hors majeure IA-DATA</li>
              </ul>

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
export default Formations;
