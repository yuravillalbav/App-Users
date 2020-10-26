import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-3">¡Hola, terrícola!</h1>
        <p className="lead">
          Bienvenido a la mejor página para conseguir empleo. ¿Quieres estar en
          nuestra base de datos? Es muy fácil, solo llena el formulario con tus
          datos y listo.
        </p>
        <hr className="my-4" />

        <p className="lead">
          <Link
            to="/form"
            className="btn btn-primary btn-lg"
          >
            Formulario
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
