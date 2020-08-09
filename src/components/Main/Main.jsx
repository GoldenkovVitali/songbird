/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import './Main.css';
import SongbirdHeader from '../Data-SongBird-Header/Songbird-Header';
import SongbirdMain from '../Data-SongBird-main/Songbird-main';
import SongbirdMap from '../Data-Songbird-map/Songbird-map';
import SongbirdVictorina from '../Data-Songbird-Victorina/Songbird-Victorina';

import SongbirdFinish from '../Songbird-Finish/Songbird-Finish';
import winAudio from '../../assets/success.mp3';
import errorAudio from '../../assets/error.mp3';
import mainObject from '../../Main-Object/mainObject';

export default class Main extends Component {
  state = {
    id: 0,
    score: 0,
    random: 0,
    page: 0,
    trip: 0,
    gameEnd: false,
    select: false,
    finish: false,
  }

  componentDidMount() {
    this.setState({
      random: this.mainChange(),
    });
  }

  mainChange = () => Math.floor(Math.random() * 6)

  onBirdSelected = (id, event) => {
    event.persist();
    this.setState({
      id: id - 1,
      select: true,
    });

    if (!event.target.classList.contains('bad') && !event.target.classList.contains('good')) {
      this.setState(prevState => ({
        trip: prevState.trip + 1,
      }));
    }
    this.SongbirdList(event);
    this.songberdSeccess(id);
  };

  SongbirdList = (event) => {
    const { random, finish } = this.state;
    if (event._targetInst.key - 1 !== random && !finish) {
      event.target.classList.add('bad');
    } else if (event._targetInst.key - 1 === random && !finish) {
      event.target.classList.add('good');
    }
  }

  songberdSeccess = (id) => {
    const { random, finish, trip } = this.state;
    if (finish) return;

    if (id - 1 === random) {
      this.setState(prevState => ({
        finish: true,
        score: prevState.score + 5 - trip,
      }));
      this.audioEffects(true);
    } else {
      this.audioEffects(false);
    }
  }

  audioEffects = (finish) => {
    const errorAudioNew = document.getElementById('errorSound');
    const winAudioNew = document.getElementById('winSound');
    if (finish) {
      errorAudioNew.currentTime = 0;
      winAudioNew.play();
    } else {
      winAudioNew.currentTime = 0;
      errorAudioNew.play();
    }
  }

  getNextPage = () => {
    const { finish, page } = this.state;
    if (!finish) return;
    if (page === 5) {
      this.setState({
        gameEnd: true,
        page: -1,
      });
    }
    this.setState(prevState => ({
      trip: 0,
      page: prevState.page + 1,
      random: this.mainChange(),
      finish: false,
      select: false,
    }));
  }

  showGame = () => {
    this.setState({
      gameEnd: false,
      score: 0,
    });
  }

  render() {
    const {
      id, select, random, page, finish, score, gameEnd,
    } = this.state;
    console.log(`привильный ответ - ${mainObject[page][random].name}`);
    if (!gameEnd) {
      return (
        <>
          <SongbirdHeader
            page={page}
            score={score}
          />
          <SongbirdVictorina
            random={random}
            page={page}
            finish={finish}
          />
          <div className="row mb2">
            <SongbirdMap
              onItemSelected={this.onBirdSelected}
              page={page}
            />
            <SongbirdMain
              id={id}
              page={page}
              select={select}
            />
            <button
              className={finish ? 'button button-next' : 'button'}
              onClick={this.getNextPage}
              type="button"
            >
              Next Level
            </button>
          </div>
          <audio src={winAudio} id="winSound"><track kind="captions" /></audio>
          <audio src={errorAudio} id="errorSound"><track kind="captions" /></audio>
        </>
      );
    }

    return (
      <>
        <SongbirdHeader
          score={score}
          page={page}
        />
        <SongbirdFinish
          showGame={this.showGame}
          score={score}
        />
      </>
    );
  }
}
