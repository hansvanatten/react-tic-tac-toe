// src/games/GamesContainer.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { GamesContainer } from './GamesContainer'
import Title from '../components/Title'
import GameItem from './GameItem'

chai.use(chaiEnzyme)
