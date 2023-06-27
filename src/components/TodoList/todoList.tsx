import styled from "styled-components";
import TodoIcon from "../TodoItem/todoItem";

const TodoList = () => {
  return (
    <SContainer>
      <TodoIcon />
    </SContainer>
  );
};

export default TodoList;

const SContainer = styled.div`
  display: flex;
`;
