import React from "react";
import styled from "styled-components";
import ScoreBoard from "@/components/GamePage/ScoreBoard/ScoreBoard";

const Wrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100vw;
`;

const HeaderSection = styled.section`
  border-bottom: 1px solid white;
  display: flex;
  height: 30vh;
  width: 100vw;
`;

const ScoreBoardWrapper = styled.div`
  background-color: #000000;
  border-right: 1px solid white;
  height: 100%;
  width: 70vw;
`;

const CurrentTurn = styled.div`
  background-color: skyblue;
  height: 100%;
  width: 30vw;
`;

const PlayStatusSection = styled.section`
  background-color: blue;
  display: flex;
  height: 70vh;
  width: 100vw;
`;

const GameStatus = styled.div`
  background-color: green;
  border-right: 1px solid white;
  width: 70vw;
  height: 100%;
`;

const PlayerInfo = styled.div`
  background-color: purple;
  height: 100%;
  width: 30vw;
`;

const GamePage = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <ScoreBoardWrapper>
          <ScoreBoard />
        </ScoreBoardWrapper>
        <CurrentTurn />
      </HeaderSection>
      <PlayStatusSection>
        <GameStatus></GameStatus>
        <PlayerInfo></PlayerInfo>
      </PlayStatusSection>
    </Wrapper>
  );
};

export default GamePage;
