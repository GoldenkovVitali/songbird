/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import './Songbird-map.css';

const mapList = (props, arr) => {
  const className = props.page % 2 === 1 ? 'list-group-item default li' : 'list-group-item li';
  return arr.map((item) => {
    const { id, name } = item;
    return (
      <li
        onClick={(event) => { props.onItemSelected(id, event); }}
        className={className}
        key={id}
        onKeyPress={() => {}}
      >
        <span className="li-button" />
        {name}
      </li>
    );
  });
};
export default mapList;
