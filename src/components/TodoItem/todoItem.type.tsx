import { Todo } from "../TodoList/todoList.type";

export type TodoItemProps = {
  todo: Todo;
  markComplete: (id: number) => void;
};
