import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addMe = (eve) => {
    eve.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    console.log(todo);
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={addMe}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
          console.log(todo);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
