import React, { Component } from 'react';
import './Songbird-Finish.css';
import PropTypes from 'prop-types';
import winImage from '../../assets/win.jpg';

export default class SongbirdFinish extends Component {
        static propTypes = {
          showGame: PropTypes.func.isRequired,
          score: PropTypes.number.isRequired,
        }

        render() {
          const { score, showGame } = this.props;
          const SongbirdWin = (
            <>
              <h2 className="display-3 text-center">Поздравляем!</h2>
              <p className="lead text-center">Вы прошли игру и набрали {score} из 30 возможных баллов</p>
              <hr className="my-4" />
            </>
          );
          if (score !== 30) {
            return (
              <div className="jumbotron game-over">
                {SongbirdWin}
                <button
                  className="button button-next button-game-over"
                  onClick={showGame}
                  type="button"
                >
                  Попробовать еще раз!
                </button>
              </div>
            );
          }
          return (
            <div className="jumbotron game-over">
              {SongbirdWin}
              <img
                className="img-win"
                src={winImage}
                alt="finish"
              />
              <button
                className="button button-next button-game-over"
                onClick={showGame}
                type="button"
              >
                Попробовать еще раз!
              </button>
            </div>
          );
        }
}
