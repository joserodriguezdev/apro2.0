import React, { useState } from "react";

// Componente funcional
function CambiarFondo() {
  // Estado para el color de fondo
  const [color, setColor] = useState("white");

  // Función que cambia el color por uno aleatorio de un array
  const cambiarColor = () => {
    const colores = ["blue", "green", "red", "black"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  // Retorna el JSX con estilo de fondo dinámico
  return (
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center", paddingTop: "20vh" }}>
      <button onClick={cambiarColor}>Cambiar Fondo</button>
    </div>
  );
}

export default CambiarFondo;
