// src/game/GamesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import Title from '../components/Title'
import GameItem from './GameItem'
import './GamesContainer.sass'

export class GamesContainer extends PureComponent {
  static propTypes = {
    game: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  render() {
    return(
      <div className="game wrapper">
        <header>
          <Title content="All Games" />
        </header>

        <main className="container">
          { this.props.game.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService
})(GamesContainer)
