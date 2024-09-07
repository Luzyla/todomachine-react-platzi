function CreateTodoButton() {
  return (
    <div className="container-boton flex">
      <button
        className="boton-add flex centrar-x centrar-y"
        onClick={(e) => {
          console.log("le diste click");
          console.log("EVENT", e);
          console.log("EVENT", e.target);
        }}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
