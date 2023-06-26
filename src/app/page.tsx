"use client";

import Icon from "@/components/Icon/icon";
import Input from "@/components/Input/input";
import Text from "@/components/Text/text";
import TodoList from "@/components/TodoList/todoList";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <SMainContainer>
        <STopContainer>
          <Text />
          <Icon />
        </STopContainer>
        <Input />
        <div>
          <TodoList />
        </div>
      </SMainContainer>
    </main>
  );
}

const SMainContainer = styled.div`
  color: #fff;

  background-image: url("./todo.jpeg");
  height: 100vh;
  background-size: 100% 300px;
  background-repeat: no-repeat;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const STopContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  min-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
