function TodoItem({ text, completed }) {
  return (
    <li className="container-task flex centrar-x">
      <div className="pixel"></div>
      <p className="task-text">{text}</p>
      <span className="pixel del-task flex"></span>
    </li>
  );
}

export { TodoItem };
