import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Songbird-Victorina.css';
import Player from 'react-h5-audio-player';
import mainObject from '../../Main-Object/mainObject';
import birdImage from '../../assets/bird.jpg';
import winAudio from '../../assets/success.mp3';

import 'react-h5-audio-player/lib/styles.css';

export default class SongbirdVictorina extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    random: PropTypes.number.isRequired,
    finish: PropTypes.bool.isRequired,
  }

  render() {
    const { page, random, finish } = this.props;

    return (
      <div className="songbird-victorina-bird jumbotron rounded">
        <img
          className="bird-image"
          src={finish ? mainObject[page][random].image : birdImage}
          alt={finish ? mainObject[page][random].name : 'victorina-bird'}
        />
        <div>
          <ul className="list-group list-group-flush player">
            <li className="list-group-item">
              <h5>{finish ? mainObject[page][random].name : '******'}</h5>
            </li>
            <li className="list-group-item">
              <Player
                autoPlayAfterSrcChange={false}
                src={finish ? winAudio : mainObject[page][random].audio}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
