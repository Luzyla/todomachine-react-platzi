function CreateTodoButton({ setOpenModal }) {
  return (
    <div className="container-boton flex centrar-x centrar-y">
      <button
        className="boton-add flex centrar-x centrar-y"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
