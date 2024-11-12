import React, { Component } from "react";
import AuthService from "../services/AuthService";
import Accueil from "./Accueil.js";
import design from "./design1.png";
import job from "./jobs.jpg";
import "./log.css";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      isLoggedIn: false,
      error: "",
    };
    this.authService = new AuthService();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      console.log(email)
      console.log(password)
      const data = await this.authService.login(email, password);
      console.log(data);
      if(data.status == true){
        this.setState({ isLoggedIn: true, error: "" });
              console.log("Utilisateur connecté:", data);
      } else{
        console.log("utilisateur non connecté");
        alert("Email or Password not exist")
      }
    } catch (error) {
      this.setState({ error: "Identifiants invalides" });
      console.error("Erreur de connexion:", error);
    }
  };

  handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log(this.state);

    // Vérifier si l'un des champs est vide
    if (!username || !email || !password) {
      const error = new Error("Un ou plusieurs champs sont vides. Veuillez remplir tous les champs.");
      console.error(error.message);
      alert("Erreur lors de l'inscription")
      return; // Stopper l'exécution de la fonction
    }

    try {
      const data = await this.authService.register(username, email, password);
      console.log("Utilisateur inscrit:", data);
      alert("Utilisateur inscrit")
      // Vous pouvez également vous connecter automatiquement après l'inscription
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      alert("Erreur lors de l'inscription")
    }
  };


  render() {
    const { isLoggedIn, error } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <Accueil />
          </div>

        ) : (
          <div>
            <header>
              <nav>
                <img src={design} alt="StudentJob" id="logo" />
              </nav>
            </header>

            <main>
              <img
                src={job}
                id="page1"
                alt="Job"
                style={{ float: "left", marginRight: "90px" }}
              />
              <section id="login-section">
                <h2>Connexion</h2>
                <form onSubmit={this.handleLogin}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    style={{ width: "100%" }}
                  />

                  <p></p>
                  <label htmlFor="password">Mot de passe</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={this.handleChange}
                    style={{ width: "100%" }}
                  />
                  <p></p>
                  <button type="submit" className="btn btn-primary">
                    Connexion
                  </button>
                  <br />
                  <p>{error}</p>
                </form>
              </section>

              <section id="register-section">
                <h2>Inscription</h2>
                <form onSubmit={this.handleRegister}>
                  <label htmlFor="reg_username">Nom d'utilisateur</label>
                  <br />
                  <input
                    type="text"
                    id="reg_username"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    onChange={this.handleChange}
                    style={{ width: "100%" }}
                  />
                  <p></p>

                  <label htmlFor="reg_email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="reg_email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    style={{ width: "100%" }}
                  />
                  <br />
                  <p></p>
                  <label htmlFor="reg_password">Mot de passe</label>
                  <br />
                  <input
                    type="password"
                    id="reg_password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={this.handleChange}
                    style={{ width: "100%" }}
                  />
                  <br />
                  <p></p>
                  <button type="submit" className="btn btn-primary mt-4">
                    S'inscrire
                  </button>
                </form>
              </section>
            </main>

            <footer>
              <a href=" " class="footer-link">
                Contact
              </a>

              <a href=" " class="footer-link">
                Tel: +33 669988554
              </a>

              <a href=" " class="footer-link">
                Email: StudentJob@et.esiea.fr
              </a>
              <p>© 2024 Mon Site Web. Tous droits réservés.</p>
            </footer>
          </div>
        )}
      </div>
    );
  }
}

export default AuthComponent;
