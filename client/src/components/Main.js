import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Main = ({ data }) => (
  <div>
      <h1>HOLA AMIGO MAS</h1>
      {data.map((item, index) => <Item item={item} key={index} />)}
  </div>
);

export default Main;

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    endTime: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    itemURL: PropTypes.string.isRequired,
    postType: PropTypes.string.isRequired,
    soldPrice: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};