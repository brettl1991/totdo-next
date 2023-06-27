import styled from "styled-components";

const Input = () => {
  return (
    <SForm>
      <SInput type="text" value="Create a new todo..." />
    </SForm>
  );
};

export default Input;

const SForm = styled.form`
  display: flex;
  height: 75px;
`;

const SInput = styled.input`
  padding: 1rem;
  background-color: #25273c;
  width: 800px;
  color: #cbccd6;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
`;
