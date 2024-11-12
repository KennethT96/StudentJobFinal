import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom";
import AuthComponent from "./components/AuthComponent";
import Accueil from "./components/Accueil"
import Conseils from "./components/Conseils";
import Offres from "./components/Offres";
import Alumnis from "./components/Alumnis"
import Formations from "./components/Formations"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/offres" element={<Offres />} />
            <Route path="/alumnis" element={<Alumnis />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/conseils" element={<RedirectToAccueil><Conseils /></RedirectToAccueil>} />
            <Route path="/accueil" element= { <Accueil />} />
            <Route path="/" element= { <AuthComponent />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

const RedirectToAccueil = ({ children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/accueil');
  };

  return (
    <>
      <button onClick={handleBack}>retour</button>
      {children}
    </>
  );
};


export default App;
