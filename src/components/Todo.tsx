import "./todo.css";

const Todo = (props: {
  isDone: boolean;
  title: string;
  onToggleDone: void;
  onDelete: void;
}) => {
  return (
    <div class={props.isDone ? "todo todo--done" : "todo"}>
      <input
        type="checkbox"
        checked={props.isDone}
        onClick={() => props.onToggleDone}
      />
      <p>{props.title}</p>
      <button
        class="todo__remove"
        onClick={(e) => {
          e.preventDefault();
          return props.onDelete;
        }}
      >
        x
      </button>
    </div>
  );
};

export default Todo;
