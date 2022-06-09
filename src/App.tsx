import { batch, Component, For } from "solid-js";
import { createSignal } from "solid-js";
import "./app.css";
import Todo from "./components/Todo";
import { removeIndex, toggleProp } from "./utils";

export interface TodoItem {
  title: string;
  done: boolean;
}

const addTodo = (e: SubmitEvent) => {
  e.preventDefault();
  batch(() => {
    setTodos([
      ...todos(),
      {
        title: title(),
        done: false,
      },
    ]);
    setTitle("");
  });
};

const handleRemove = (index: number) => {
  setTodos((t) => removeIndex(t, index));
};

const handleToggleDone = (index: number) => {
  setTodos((t) => toggleProp(t, "done", index));
};

const [todos, setTodos] = createSignal<TodoItem[]>([
  { title: "example", done: false },
]);
const [title, setTitle] = createSignal("");

const App: Component = () => {
  return (
    <div class="app">
      <h2>Todos</h2>
      <form onsubmit={addTodo}>
        <input
          class="app__title-input"
          type="text"
          name="todo-title"
          placeholder="insert todo title and click +"
          onInput={(e) => setTitle(e.currentTarget.value)}
          value={title()}
          required
        />
        <button>+</button>
      </form>
      <For each={todos()}>
        {(todo, i) => (
          <Todo
            isDone={todos()[i()].done}
            title={todo.title}
            onDelete={handleRemove(i())}
            onToggleDone={handleToggleDone(i())}
          />
        )}
      </For>
    </div>
  );
};

export default App;
