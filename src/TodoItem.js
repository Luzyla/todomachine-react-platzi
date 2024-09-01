function TodoItem(props) {
  //tambien podria poner directamente las propiedes desestructuradas {text, completed}
  return (
    <li className="container-task flex centrar-x">
      <div className={`pixel  ${props.completed && "pixel--active"}`}>V</div>
      <p className={`task-text ${props.completed && "task-text--completed"}`}>
        {props.text}
      </p>
      <span className="pixel del-task flex">X</span>
    </li>
  );
}

export { TodoItem };
