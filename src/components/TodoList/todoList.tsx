import styled from "styled-components";
import TodoIcon from "../TodoItem/todoItem";
import { useState } from "react";
import { Todo } from "./todoList.type";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Jog around the park", completed: false },
    { id: 2, text: "10 minutes meditation", completed: false },
    { id: 3, text: "Study for 5 hours", completed: false },
  ]);
  return (
    <SContainer>
      <TodoIcon />
    </SContainer>
  );
};

export default TodoList;

const SContainer = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 480px) {
    margin-top: 50px;
    justify-content: center;
  }
`;
