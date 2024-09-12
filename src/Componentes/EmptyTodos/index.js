import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";

function EmptyTodos() {
  return (
    <>
      <p>Crea tu primer TAREA!</p>
      <CreateTodoButton />
    </>
  );
}

export { EmptyTodos };
