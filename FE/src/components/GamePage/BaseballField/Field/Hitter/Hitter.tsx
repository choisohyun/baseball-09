import React from "react";
import styled, { keyframes, Keyframes, css } from "styled-components";
import HitterImg from "./hitter.png";

const HomeBase = keyframes``;

const FirstBase = keyframes`
  99% {
    transform: translate(230px, -240px);
  }
  100% {  
    transform: translate(230px, -240px) scaleX(-1);
  }
`;

const SecondBase = keyframes`
  0% {
    transform: translate(230px, -240px) scaleX(-1);
  }
  100% {  
    transform: translate(0px, -450px) scaleX(-1);
  }
`;

const ThirdBase = keyframes`
  0% {
    transform: translate(0px, -450px)  scaleX(-1);
  }
  99% {
    transform: translate(-200px, -220px) scaleX(-1);
  }
  100% {  
    transform: translate(-200px, -220px);
  }
`;

const FourthBase = keyframes`
  0% {
    transform: translate(-200px, -220px);
  }
  100% {  
    transform: translate(0px, 0px);
  }
`;

const HitterWrap = styled("div")<IHitterProp>`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 48%;
  top: 86.5%;
  z-index: 100;
  ${(props) => css`
    animation: ${props.active} 3s 1.2s linear 1;
    animation-fill-mode: both;
  `}
  .hitter-img {
    height: inherit;
  }
`;

interface IHitterProp {
  active: Keyframes;
}

interface IBase {
  base: number;
}

const Bases = [HomeBase, FirstBase, SecondBase, ThirdBase, FourthBase];

const Hitter = (props: IBase) => {
  return (
    <div>
      <HitterWrap active={Bases[props.base]}>
        <img className="hitter-img" src={HitterImg} />
      </HitterWrap>
    </div>
  );
};

export default Hitter;
