import React from "react";
import axios from "axios";
import { Todo } from "../../typings";
import Link from "next/link";

const fetchTodos = async () => {
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
