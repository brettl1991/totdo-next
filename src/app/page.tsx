"use client";

import Icon from "@/components/Icon/icon";
import Input from "@/components/Input/input";
import Text from "@/components/Text/text";
import TodoList from "@/components/TodoList/todoList";
import styled from "styled-components";
import SunIcon from "../../public/icons/sun.svg";

export default function Home() {
  return (
    <main>
      <SMainContainer>
        <SContentContainer>
          <STopContainer>
            <Text />
            <Icon src={SunIcon} />
          </STopContainer>
          <Input />

          <TodoList />
        </SContentContainer>
      </SMainContainer>
    </main>
  );
}

const SMainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("./todo.jpeg");
  background-size: 100% 550px;
  background-repeat: no-repeat;
  background-color: rgba(37, 39, 60, 0.8);

  @media (max-width: 480px) {
    background-size: contain;
  }
`;

const SContentContainer = styled.div`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const STopContainer = styled.div`
  margin-top: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 275px;
    padding: 1rem;
  }
`;
