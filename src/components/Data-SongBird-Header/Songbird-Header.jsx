import React, { Component } from 'react';
import './Songbird-Header.css';
import PropTypes from 'prop-types';

export default class SongbirdHeader extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }

  componentDidUpdate() {
    const { page } = this.props;
    const list = document.querySelectorAll('li');
    list.forEach((el, index) => {
      el.classList.remove('active');
      if (index === page) el.classList.add('active');
    });
  }

  render() {
    const { score } = this.props;
    return (
      <div className="header-main d-flex">
        <div className="header-panel d-flex">
          <div className="logotype" />
          <h4>Score: <span className="main-score">{ score }</span></h4>
        </div>
        <ul className="pagination li">
          <li className="page-item li"><a className="page-link" href="/#">Птицы Азии</a></li>
          <li className="page-item active li"><a className="page-link" href="/#">Птицы Европы</a></li>
          <li className="page-item li"><a className="page-link" href="/#">Птицы Австралии</a></li>
          <li className="page-item li"><a className="page-link" href="/#">Птицы Северной Америки</a></li>
          <li className="page-item li"><a className="page-link" href="/#">Птицы Южной Америки</a></li>
          <li className="page-item li"><a className="page-link" href="/#">Птицы Африки</a></li>
        </ul>
      </div>
    );
  }
}
