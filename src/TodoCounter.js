function TodoCounter({ total, completed }) {
  return (
    <h1 className="title-ppal">
      {total === completed
        ? `Felicitaciones! 🥳 Has completado tu lista de ${total} tareas!`
        : `Has completado ${completed} de ${total} TAREAS`}
    </h1>
  );
}

export { TodoCounter };
