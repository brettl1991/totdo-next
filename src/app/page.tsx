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
        <BackgroundImageContainer>
          <BackgroundImage />
        </BackgroundImageContainer>
        <ContentContainer>
          <STopContainer>
            <Text />
            <Icon src={SunIcon} />
          </STopContainer>
          <Input />
          <div>
            <TodoList />
          </div>
        </ContentContainer>
      </SMainContainer>
    </main>
  );
}

const SMainContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const STopContainer = styled.div`
  min-width: 800px;
  margin-top: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./todo.jpeg");
  background-size: 100% 550px;
  background-repeat: no-repeat;
  opacity: 0.8;
  background-color: #25273c;
`;
