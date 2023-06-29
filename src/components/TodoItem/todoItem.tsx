import styled from "styled-components";
import { SListIconProps } from "../TodoList/todoList.type";
import { TodoItemProps } from "./todoItem.type";

const TodoItem = ({ todo, markComplete }: TodoItemProps) => {
  const handleClickChange = () => {
    markComplete(todo.id);
  };

  return (
    <SListIcon completed={todo.completed}>
      <SCheckbox
        type="checkbox"
        checked={todo.completed}
        onChange={handleClickChange}
      />
      <SText completed={todo.completed} onClick={handleClickChange}>
        {todo.text}
      </SText>
    </SListIcon>
  );
};

export default TodoItem;

const SListIcon = styled.li<SListIconProps>`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 1rem;
  background-color: #25273c;
  width: 800px;
  color: #e0e0e7;
  font-size: 1.2rem;
  border-radius: 3px;
  border: none;
  height: 43px;
  text-align: center;
  border-bottom: 1px solid #444665;

  ${(props) =>
    props.completed &&
    `
      text-decoration: line-through;
      color: #a1a2ae;
      
    `}

  @media (max-width: 480px) {
    width: 100%;
    height: 35px;
  }
`;

const SCheckbox = styled.input`
  position: relative;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #444665;
  border-radius: 50%;
  background-color: #25273c;
  cursor: pointer;

  &:checked {
    background: linear-gradient(#774edb, #d67ac7);
  }

  &:checked::before {
    content: "";
    display: block;
    width: 2px;
    height: 8px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    position: absolute;
    transform: rotate(45deg);
    top: 3px;
    left: 6px;
  }
`;
const SText = styled.span<SListIconProps>`
  cursor: pointer;

  ${(props) =>
    props.completed &&
    `
      text-decoration: line-through;
      color: #a1a2ae;
    `}
`;
