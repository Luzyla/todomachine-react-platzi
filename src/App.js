import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Calmarme", completed: true },
  { text: "Curso React.js", completed: false },
  { text: "Dormir", completed: false },
  { text: "Meditar", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter total={25} completed={16} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
