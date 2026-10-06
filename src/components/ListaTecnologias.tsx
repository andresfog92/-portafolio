type ListaTecnologiasProps = {
  tecnologias: string[];
};

function ListaTecnologias({ tecnologias }: ListaTecnologiasProps) {
  return (
    <section>
      <h2>Tecnologías</h2>
      <ul className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListaTecnologias;