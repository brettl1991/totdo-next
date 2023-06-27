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
  margin-top: 50px;

  @media (max-width: 480px) {
    margin-top: 50px;
    justify-content: center;
  }
`;
