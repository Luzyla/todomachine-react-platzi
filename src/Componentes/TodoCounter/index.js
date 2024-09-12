import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h1 className="title-ppal">
      {totalTodos === completedTodos && totalTodos !== 0
        ? `Felicitaciones! 🥳 Has completado tu lista de ${totalTodos} tareas!`
        : totalTodos !== 0
        ? `Has completado ${completedTodos} de ${totalTodos} TAREAS`
        : `Aún no tienes tareas`}
    </h1>
  );
}

export { TodoCounter };
