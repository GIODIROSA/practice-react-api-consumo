import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "./Personaje";

const Pintarpersonaje = ({ nombre }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    obtenerCharacter(nombre);
  }, [nombre]);

  const obtenerCharacter = async (nombre) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );

      if (!res.ok) {
        console.log(res);
        return Swal.fire({
          title: "Error!",
          text: `no existe ${nombre}`,
          icon: "error",
        });
      }

      const data = await res.json();
      //   console.log([...data.results]);
      setPersonajes([...data.results]);
    } catch (error) {
      console.log("este es el error:___", error);
    } finally {
    }
  };
  return (
    <div className="row mt-2">
      {personajes.map((item) => (
        <Personaje key={item.id} character={item} />
      ))}
    </div>
  );
};

export default Pintarpersonaje;
