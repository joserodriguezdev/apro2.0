import React, { useState } from "react";

function CambiarFondo() {
  const [color, setColor] = useState("white");
  const [mensaje, setMensaje] = useState("");
  const [texto, setTexto] = useState("");
  const [contador, setContador] = useState(0);

  const contarClicks = () => {
    setContador(contador + 1);
  };

  const resetearContador = () => {
    setContador(0);
  };

  const cambiarColor = () => {
    const colores = ["blue", "green", "red", "black"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

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
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "5vh",
        transition: "background-color 0.3s ease",
        padding: "2rem",
      }}
    >
      {/* Ejercicio 4: cambiar fondo con select */}
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

      {/* Ejercicio 1: cambiar fondo aleatorio */}
      <button
        onClick={cambiarColor}
        style={{ padding: "1rem 2rem", margin: "1rem" }}
      >
        Cambiar Fondo
      </button>

      {/* Ejercicio 2: mostrar mensaje aleatorio */}
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

      {/* Ejercicio 3 */}
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
        <button onClick={() => setTexto("")} style={{ marginTop: "1rem" }}>
          Limpiar
        </button>
      </div>

      {/* Ejercicio 5: contador de clics */}
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={contarClicks}
          style={{ padding: "1rem 2rem", marginRight: "1rem" }}
        >
          ¡Click!
        </button>
        <button onClick={resetearContador} style={{ padding: "1rem 2rem" }}>
          Reiniciar contador
        </button>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
          Hiciste click <strong>{contador}</strong>{" "}
          {contador === 1 ? "vez" : "veces"}.
        </p>
      </div>
    </div>
  );
}

export default CambiarFondo;
