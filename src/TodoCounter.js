function TodoCounter({ total, completed }) {
  return (
    <h1 className="title-ppal">
      Has completado {completed} de {total} TAREAS
    </h1>
  );
}

export { TodoCounter };
