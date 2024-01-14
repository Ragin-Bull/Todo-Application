import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  // Here todo is the message only
  const [msg, setMsg] = useState("");

  // This is what importing a functionality looks like
  const { addTodo } = useTodo();

  const addMe = (eve) => {
    // To prevent auto-submit to a different route (POST Request)
    eve.preventDefault();
    if (!msg) return;
    addTodo({ todo: msg, completed: false });
    console.log(msg);
    setMsg(""); // This is done to clear the dashboard
  };

  return (
    <form className="flex" onSubmit={addMe}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
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
