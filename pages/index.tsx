import type { NextPage } from "next";
import { ChangeEventHandler, useState, VFC } from "react";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText(" ");
  };
  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          value={text}
          onChange={input}
          className="border border-black"
        />
        <button className="border border-black shrink-0 px-2" onClick={add}>
          追加
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: VFC<ListItemProps> = ({ todo, toggle }) => {
  return (
    <label className="flex item-center gap-x-2">
      <input
        type="checkbox"
        checked={todo.isDone}
        value={todo.id}
        onChange={toggle}
      />
      <span>{todo.label}</span>
    </label>
  );
};

export default Home;
