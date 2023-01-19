import React from "react";
import axios from "axios";
import { Todo } from "../../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const { data: todos } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return todos;
};

const TodosList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((item) => (
        <p key={item.id}>
          <Link href={`/todos/${item.id}`}>Todo: {item.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
