import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

const Index = () => {
  return (
    <div className="notFound">
      <main className="notFound_error">
        <h1 className="notFound_error_title">404</h1>
        <p className="notFound_error_text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="notFound_error_back" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
};

export default Index;
