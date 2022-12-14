import React from "react";
import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setNombre }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("__________enviando___________");

    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Nombre obligatorio",
        icon: "error",
      });
    }

    setNombre(nombre.trim().toLowerCase());

    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese nombre del personaje"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-info mt-4">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Formulario;
