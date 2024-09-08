function TodoCounter({ total, completed }) {
  return (
    <h1 className="title-ppal">
      {total === completed && total !== 0
        ? `Felicitaciones! 🥳 Has completado tu lista de ${total} tareas!`
        : `Has completado ${completed} de ${total} TAREAS`}
    </h1>
  );
}

export { TodoCounter };
