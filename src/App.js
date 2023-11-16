import "./styles.css";
import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const diminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <main>
      <div>
        <p>Contar de 0 a 10</p>
        <h1>Contador: {contador}</h1>
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={diminuirContador}>Diminuir</button>
      </div>
    </main>
  );
}

export default Contador;
