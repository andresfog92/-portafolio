import { useState } from "react";
import "./App.css";
import Presentacion from "./components/Presentacion";
import ListaTecnologias from "./components/ListaTecnologias";
import ListaProyectos from "./components/ListaProyectos";
import type { Proyecto } from "./components/ListaProyectos";

const tecnologias: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
];

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Fila creativa",
    descripcion:
      "Aplicación en React del taller de modelado: permite gestionar una fila de elementos.",
    // enlace: "https://github.com/tu-usuario/fila-creativa",
  },
];

function App() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <div className={oscuro ? "app oscuro" : "app"}>
      <button className="boton-tema" onClick={() => setOscuro(!oscuro)}>
        {oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro"}
      </button>

      <main className="contenedor">
        <Presentacion
          nombre="Andres felipe Orozco Garcia"
          descripcion="Estudiante de programación creativa. Me interesa aprender a crear interfaces web con React, innovar el mundo de la programacion mejorar mi calidad de vida, hacerle paginas a grandes empresas y construir proyectos como Grand the ft auto 6 y juegos de realidad virtual. "
        />

        <section>
          <h2>Contacto</h2>
          <p>
            Escríbeme a{" "}
            <a href="mailto:andresfog92@gmail.com">andresfog92@gmail.com</a>
          </p>
        </section>

        <ListaTecnologias tecnologias={tecnologias} />
        <ListaProyectos proyectos={proyectos} />
      </main>
    </div>
  );
}

export default App;