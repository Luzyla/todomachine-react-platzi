function TodoItem(props) {
  //tambien podria poner directamente las propiedes desestructuradas {text, completed}
  return (
    <li className="container-task flex centrar-x">
      <span
        className={`pixel  ${props.completed && "pixel--active"}`}
        onClick={props.onCompleted}
      >
        V
      </span>
      <p className={`task-text ${props.completed && "task-text--completed"}`}>
        {props.text}
      </p>
      <span className="pixel del-task flex" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
