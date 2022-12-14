import React from "react";

const Personaje = ({ character = "" }) => {
  const { name, image, species } = character;

  return (
    <div className="col-12 col-md-4 col-lg-4 mb-2">
      <div className="card">
        <img src={image} alt="`imagen_${name}`" srcset="" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
