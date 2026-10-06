type PresentacionProps = {
  nombre: string;
  descripcion: string;
};

function Presentacion({ nombre, descripcion }: PresentacionProps) {
  return (
    <header className="presentacion">
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
    </header>
  );
}

export default Presentacion;