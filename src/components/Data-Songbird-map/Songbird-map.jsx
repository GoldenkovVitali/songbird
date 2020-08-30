import React from 'react';
import './Songbird-map.css';
import PropTypes from 'prop-types';
import mainObject from '../../Main-Object/mainObject';
import mapList from './Songbird-main-list';

const SongbirdMap = (props) => {
  const { page } = props;
  const items = mapList(props, mainObject[page]);
  return (
    <div className="col-md-6">
      <ul className="item-list list-group">
        {items}
      </ul>
    </div>
  );
};

SongbirdMap.propTypes = {
  page: PropTypes.number.isRequired,
};

export default SongbirdMap;
