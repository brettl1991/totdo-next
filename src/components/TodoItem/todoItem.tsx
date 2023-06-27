import styled from "styled-components";

const TodoItem = () => {
  return (
    <SList>
      <SListIcon>Jog around the park</SListIcon>
      <SListIcon>10 minutes meditation</SListIcon>
      <SListIcon>Study for 5 hours</SListIcon>
    </SList>
  );
};

export default TodoItem;
const SList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0;
`;

const SListIcon = styled.li`
  padding: 1rem;
  background-color: #25273c;
  width: 800px;
  color: #e0e0e7;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  height: 43px;
`;
