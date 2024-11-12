import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8081/api/v1/users/", // URL de base de votre backend
      timeout: 5000, // Délai d'attente de la requête (en millisecondes)
      headers: {
        "Content-Type": "application/json", // Type de contenu des requêtes (JSON)
      },
    });
  }

  async login(email, password) {


    try {
      const response = await this.api.post("/login", { email, password });
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      throw error;
    }
  }

  async register(username, email, password) {
    try {
      const response = await this.api.post("/save", {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem("accessToken");
  }

  getCurrentUser() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // Analysez le jeton JWT pour extraire les informations de l'utilisateur si nécessaire
      // Vous pouvez également vérifier l'expiration du jeton ici
    }
    return null;
  }
}

export default AuthService;
