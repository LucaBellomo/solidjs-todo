import './todo.css';

const Todo = (props: {isDone: boolean, title: string, onToggleDone: void, onDelete: void }) => {
    return (
        <div class={props.isDone ? 'todo todo--done': 'todo'}
             onClick={(e) => {
                 return props.onToggleDone
             }}>
            <input type="checkbox" checked={props.isDone}  />
            <p>{props.title}</p>
            <button
                class='todo__remove'
                onClick={(e) => {
                e.preventDefault();
                return props.onDelete
            }}>x</button>
        </div>
    )
}

export default Todo;
