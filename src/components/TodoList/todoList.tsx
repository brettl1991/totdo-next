import styled from "styled-components";
import TodoIcon from "../TodoItem/todoItem";
import { useState } from "react";
import { Todo } from "./todoList.type";
import TodoItem from "../TodoItem/todoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Jog around the park", completed: false },
    { id: 2, text: "10 minutes meditation", completed: false },
    { id: 3, text: "Study for 5 hours", completed: false },
  ]);

  const markTodoComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <SContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={markTodoComplete} />
      ))}
    </SContainer>
  );
};

export default TodoList;

const SContainer = styled.div`
  display: flex;
  margin-top: 50px;
  list-style: none;
  flex-direction: column;
  gap: 10px;
  padding: 0;

  @media (max-width: 480px) {
    margin-top: 50px;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
