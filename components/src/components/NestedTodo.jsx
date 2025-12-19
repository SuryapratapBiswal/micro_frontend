import React, { lazy, Suspense } from "react";
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

const NestedTodo = () => {
  return (
    <div>
      Hi I am Nested Todo List
      <Suspense fallback={<p>Loading Todo App...</p>}>
        <TodoApp />
      </Suspense>
    </div>
  );
};

export default NestedTodo;
