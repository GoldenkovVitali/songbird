
import React, { Component } from 'react';
import './Songbird-main.css';
import PropTypes from 'prop-types';
import Player from 'react-h5-audio-player';
import mainObject from '../../Main-Object/mainObject';

import 'react-h5-audio-player/lib/styles.css';

export default class SongbirdMain extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    select: PropTypes.bool.isRequired,
  }

  render() {
    const { page, id, select } = this.props;
    const styleWiew = {
      display: select ? 'flex' : 'none',
    };
    const changeWiew = {
      display: select ? 'none' : 'block',
    };

    return (
      <div className="col-md-6">
        <div className="songbird-main card">
          <p
            className="songbird-main-wiew"
            style={changeWiew}
          >
            <span> Послушайте плейер. </span>
            <span> Выберите птицу из списка </span>
          </p>
          <div
            className="songbird-body"
            style={styleWiew}
          >
            <img
              className="songbird-image"
              src={mainObject[page][id].image}
              alt={mainObject[page][id].name}
            />
            <ul className="songbird-container list-group-flush">
              <li className="songbird-container-item">
                <h5>{mainObject[page][id].name}</h5>
              </li>
              <li className="list-group-item">
                <span>{mainObject[page][id].species}</span>
              </li>
              <li className="list-group-item">
                <Player
                  autoPlayAfterSrcChange={false}
                  src={mainObject[page][id].audio}
                />
              </li>
            </ul>
          </div>
          <span
            className="songbird-wiew"
            style={styleWiew}
          >
            {mainObject[page][id].description}
          </span>
        </div>
      </div>
    );
  }
}
