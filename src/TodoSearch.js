import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Buscá tu tarea"
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
