import styled from 'styled-components'

export const AppBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 30px 30px 30px 30px;
  flex-shrink: 0;
  @media screen and (min-width: 576px) {
    padding: 30px 50px 30px 50px;
  }
`
export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ImageStyle = styled.img`
  height: 150px;
  @media screen and (min-width: 575px) {
    height: 220px;
  }
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 100%;
`
export const ScoreCont = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 25px;
`
export const HeadingCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  font-family: Bree serif;
  width: 20%;
  @media screen and (min-width: 576px) {
    width: 10%;
  }
`
export const HeadingStyle = styled.h1`
  margin-bottom: 5px;
  margin-top: 5px;
  color: white;
`
export const ScoreHeadingStyle = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
  color: #223a5f;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const ResultsView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  width: 100%;
`
export const ResultsOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 10px 15px 10px 15px;
  border: none;
  border-radius: 8px;
  font-family: Bree serif;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
`
export const GameResult = styled.p`
  color: white;
  align-self: center;
  font-size: 24px;
  font-weight: bold;
`
export const RulesButton = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 10px 15px 10px 15px;
  border: none;
  border-radius: 8px;
  font-family: Bree serif;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  background-color: white;
  padding: 10px 40px 40px 40px;
  width: 50%;
  text-align: center;
`
