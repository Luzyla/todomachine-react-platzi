function TodoCounter({ total, completed }) {
  return (
    <h1 className="title-ppal">
      {total === completed && total !== 0
        ? `Felicitaciones! 🥳 Has completado tu lista de ${total} tareas!`
        : total !== 0
        ? `Has completado ${completed} de ${total} TAREAS`
        : `Aún no tienes tareas`}
    </h1>
  );
}

export { TodoCounter };
