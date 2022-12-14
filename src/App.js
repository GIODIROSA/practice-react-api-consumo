import { useState } from "react";
import Formulario from "./components/Formulario";
import Pintarpersonaje from "./components/Pintarpersonaje";

function App() {
  const [nombre, setNombre] = useState("");
  // console.log("entrando nombre____:", nombre);

  return (
    <div>
      <h2>BUSCAR PERSONAJE</h2>
      <Formulario setNombre={setNombre} />
      <Pintarpersonaje nombre={nombre} />
    </div>
  );
}

export default App;
