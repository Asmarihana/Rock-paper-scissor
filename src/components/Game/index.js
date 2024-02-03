import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  AppBackground,
  ButtonStyle,
  ScoreCard,
  HeadingCounter,
  ScoreCont,
  HeadingStyle,
  ScoreHeadingStyle,
  ButtonsContainer,
  ImageStyle,
  ResultsView,
  ResultsOptionContainer,
  PlayAgainButton,
  GameResult,
  RulesButton,
  PopupContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const OptionButton = props => {
  const {eachOption, onClickingButton} = props
  const {id, imageUrl} = eachOption
  const clickingButton = () => {
    onClickingButton(id, imageUrl)
  }
  return (
    <ButtonStyle
      data-testId={`${id.toLowerCase()}Button`}
      type="button"
      onClick={clickingButton}
    >
      <ImageStyle src={imageUrl} alt={id} />
    </ButtonStyle>
  )
}

class Game extends Component {
  state = {
    score: 0,
    userOptionUrl: '',
    OpponentUrl: '',

    resultDisplay: false,
    gameCondition: '',
  }

  onClickingButton = (id, imageUrl) => {
    const randomId = Math.floor(Math.random() * 3)
    const opponentOption = choicesList[randomId]

    if (id === 'SCISSORS') {
      if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    } else if (id === 'PAPER') {
      if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    } else if (id === 'ROCK') {
      if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    }
  }

  playagin = () => {
    this.setState({resultDisplay: false})
  }

  render() {
    const {
      score,
      resultDisplay,
      userOptionUrl,
      OpponentUrl,
      gameCondition,
    } = this.state
    return (
      <AppBackground>
        <ScoreCard>
          <HeadingCounter>
            <HeadingStyle>Rock Paper Scissors</HeadingStyle>
          </HeadingCounter>
          <ScoreCont>
            <ScoreHeadingStyle>Score</ScoreHeadingStyle>
            <ScoreHeadingStyle>{score}</ScoreHeadingStyle>
          </ScoreCont>
        </ScoreCard>
        {!resultDisplay && (
          <ButtonsContainer>
            {choicesList.map(eachOption => (
              <OptionButton
                onClickingButton={this.onClickingButton}
                key={eachOption.id}
                eachOption={eachOption}
              />
            ))}
          </ButtonsContainer>
        )}

        {resultDisplay && (
          <ResultsView>
            <ResultsOptionContainer>
              <HeadingStyle>YOU</HeadingStyle>
              <ImageStyle alt="your choice" src={userOptionUrl} />
            </ResultsOptionContainer>
            <ResultsOptionContainer>
              <HeadingStyle>OPPONENT</HeadingStyle>
              <ImageStyle alt="opponent choice" src={OpponentUrl} />
            </ResultsOptionContainer>
            <ResultsOptionContainer>
              {gameCondition === 'IT IS DRAW' ? (
                <GameResult>IT IS DRAW</GameResult>
              ) : (
                <GameResult>YOU {gameCondition}</GameResult>
              )}
              <PlayAgainButton onClick={this.playagin}>
                PLAY AGAIN
              </PlayAgainButton>
            </ResultsOptionContainer>
          </ResultsView>
        )}
        <div className="popup-container">
          <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
            {close => (
              <>
                <PopupContainer>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    .<RiCloseLine />
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupContainer>
              </>
            )}
          </Popup>
        </div>
      </AppBackground>
    )
  }
}
export default Game
