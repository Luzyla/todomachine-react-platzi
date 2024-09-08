import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function TodoItem(props) {
  //tambien podria poner directamente las propiedes desestructuradas {text, completed}
  return (
    <li className="container-task flex centrar-x">
      <span
        className={`pixel flex centrar-x centrar-y ${
          props.completed && "pixel--active"
        }`}
        onClick={props.onCompleted}
      >
        <FaCheck className="icon-pixel" />
      </span>
      <p className={`task-text ${props.completed && "task-text--completed"}`}>
        {props.text}
      </p>
      <span
        className="pixel del-task flex centrar-x centrar-y"
        onClick={props.onDelete}
      >
        <ImCross />
      </span>
    </li>
  );
}

export { TodoItem };
