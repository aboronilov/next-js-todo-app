import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading the todos ...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the shopping trolley ...</p>}>
        <h1>Loading shopping trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
