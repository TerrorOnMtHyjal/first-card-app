import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ data }) => (
  <div>
    <ul>
      <h1>HOLA AMIGO MAS</h1>
      {
        data.map((item, index) => {
          return <li key={index}>{item.title}</li>
        })
      }
    </ul>
  </div>
);

export default Main;

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.array.isRequired
  })).isRequired
};