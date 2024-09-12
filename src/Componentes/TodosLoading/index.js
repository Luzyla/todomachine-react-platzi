import React from "react";
import "ldrs/bouncy";

function TodosLoading() {
  return (
    <div className="container-list flex centrar-x centrar-y padding-all">
      {/* <p className="flex flex centrar-x padding-all">Cargando</p> */}
      <l-bouncy
        size="80"
        speed="1.4"
        color="var(--color-claro)"
        className="flex centrar-x"
      ></l-bouncy>
    </div>
  );
}

export { TodosLoading };
