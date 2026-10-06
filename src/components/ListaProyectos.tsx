export type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
  enlace?: string;
};

type ListaProyectosProps = {
  proyectos: Proyecto[];
};

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section>
      <h2>Proyectos</h2>
      <div className="proyectos">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="tarjeta">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            {proyecto.enlace && (
              <a href={proyecto.enlace} target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ListaProyectos;