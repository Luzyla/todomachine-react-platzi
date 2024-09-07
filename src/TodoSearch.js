import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Anotá tu tarea pendiente"
      className="campo-search"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
        /* console.log("Escribiste en la consola", e.target.value); */
      }}
    />
  );
}

export { TodoSearch };
