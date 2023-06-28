import styled from "styled-components";
import { TIconType } from "./icon.type";
import Image from "next/image";

const Icon = ({ src }: TIconType) => {
  return (
    <SWrapper>
      <Image src={src} alt="icon" fill={true} />
    </SWrapper>
  );
};

export default Icon;

const SWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
