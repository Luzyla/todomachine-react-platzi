import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="contenedor-form flex centrar-x centrar-y direccion"
    >
      <label htmlFor="tarea" className="form-tag">
        Escribe tu nueva tarea
      </label>
      <textarea
        name="tarea"
        placeholder="Agrega tu nueva tarea"
        className="form-texto"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>

      <div className="contenedor-botones flex">
        <button
          type="button"
          onClick={onCancel}
          className="button button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="button button-aceptar">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
