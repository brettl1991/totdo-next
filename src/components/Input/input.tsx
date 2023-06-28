import styled from "styled-components";

const Input = () => {
  return (
    <SForm>
      <SInput type="text" placeholder="Create a new todo..." />
    </SForm>
  );
};

export default Input;

const SForm = styled.form`
  display: flex;
  height: 75px;
  margin-top: 20px;
  @media (max-width: 480px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const SInput = styled.input`
  padding: 1rem;
  background-color: #25273c;
  width: 800px;
  color: #a1a2ae;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 300px;
    font-size: 1rem;
  }
`;
