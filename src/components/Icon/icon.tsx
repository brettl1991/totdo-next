import styled from "styled-components";
import SunIcon from "../../../public/icons/sun.svg";
import MoonIcon from "../../../public/icons/moon.svg";

const Icon = () => {
  return (
    <SIcon>
      <SSun src={SunIcon.src} alt="sun" />
      <SMoon src={MoonIcon.src} alt="moon" />
    </SIcon>
  );
};

export default Icon;

const SIcon = styled.div`
  width: 50px;
  height: 50px;
`;

const SSun = styled.img``;

const SMoon = styled.img`
  display: none;
`;
