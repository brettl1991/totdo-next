import styled from "styled-components";
import { SListIconProps } from "../TodoList/todoList.type";
import { TodoItemProps } from "./todoItem.type";

const TodoItem = ({ todo, markComplete }: TodoItemProps) => {
  const handleCheckboxChange = () => {
    markComplete(todo.id);
  };

  return (
    <SListIcon completed={todo.completed}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span>{todo.text}</span>
    </SListIcon>
  );
};

export default TodoItem;

const SList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  @media (max-width: 480px) {
    gap: 10px;
    align-items: center;
  }
`;

const SListIcon = styled.li<SListIconProps>`
  padding: 1rem;
  background-color: #25273c;
  width: 800px;
  color: #e0e0e7;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  height: 43px;
  text-align: center;

  ${(props) =>
    props.completed &&
    `
      text-decoration: line-through;
    `}

  @media (max-width: 480px) {
    width: 100%;
    height: 35px;
  }
`;
