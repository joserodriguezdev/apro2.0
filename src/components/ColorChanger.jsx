import React, { useState } from "react";

function CambiarFondo() {
  // Estado para el color de fondo (Ejercicio 1)
  const [color, setColor] = useState("white");

  // Estado para el mensaje (Ejercicio 2)
  const [mensaje, setMensaje] = useState("");

  // Estado para el texto del input (Ejercicio 3)
  const [texto, setTexto] = useState("");

  // Función para cambiar el color (Ejercicio 1)
  const cambiarColor = () => {
    const colores = ["blue", "green", "red", "black"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  // Función para mostrar mensaje aleatorio (Ejercicio 2)
  const mostrarMensaje = () => {
    const equipos = [
      "Boca",
      "River",
      "Racing",
      "Independiente",
      "San Lorenzo",
      "Central",
    ];
    const equipoElegido = equipos[Math.floor(Math.random() * equipos.length)];
    setMensaje(`El mejor equipo de Argentina es... ${equipoElegido}`);
    console.log("Mensaje mostrado:", equipoElegido);
  };

  //  JSX con los 3 ejercicios
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "10vh",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Ejercicio 4: cambiar fondo con un SELECT */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ marginRight: "1rem", fontWeight: "bold" }}>
          Elegí un color de fondo:
        </label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        >
          <option value="white">Blanco</option>
          <option value="red">Rojo</option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
          <option value="black">Negro</option>
          <option value="yellow">Amarillo</option>
        </select>
      </div>

      <button
        onClick={cambiarColor}
        style={{ padding: "1rem 2rem", margin: "1rem" }}
      >
        Cambiar Fondo
      </button>

      <button onClick={mostrarMensaje} style={{ padding: "1rem 2rem" }}>
        Mostrar mensaje
      </button>

      {mensaje && (
        <p
          style={{ marginTop: "2rem", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {mensaje}
        </p>
      )}

      {/*  Erjecicio 3 */}
      <div style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="Escribí algo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ padding: "0.5rem", width: "300px" }}
        />
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
          <strong>{texto}</strong>
        </p>
        {/*  Botón para limpiar el texto */}
        <button onClick={() => setTexto("")} style={{ marginTop: "1rem" }}>
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default CambiarFondo;
