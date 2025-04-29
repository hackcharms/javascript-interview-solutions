/** @format */

import { uuid } from "../utils";

export type TodoType = {
  id: string | number;
  title: string;
  status: "todo" | "completed" | "canceled";
};
export function useStorage() {
  let _todos: TodoType[] = [];
  function add({
    id = uuid(),
    title,
    status = "todo",
  }: Omit<TodoType, "id" | "status"> & Partial<TodoType>) {
    return _todos.unshift({ id, title, status });
  }
  function remove(_id: TodoType['id']) {
      _todos = _todos.filter(({ id }) => id !== _id);
  }
  function update(_id: TodoType['id'], newTodo:Partial<TodoType>) {
      const todo = _todos.find(({ id }) => id === _id);
      if (!todo) return;
      todo.title = newTodo.title || todo.title;
      todo.status = newTodo.status || todo.status;
      return todo;
  }
    return {
        get todos(){return _todos},
        add,
        remove,
        update
    }
}
