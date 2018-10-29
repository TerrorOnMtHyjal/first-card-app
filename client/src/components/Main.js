import React, { Fragmanet} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const calcAverage = (data) => {
  
};

const Main = ({ data }) => (
  <div>
      <h1>HOLA AMIGO MAS</h1>
      {
        data.map((item, index) => {
          return (
            <>
              <Item itemInformation={item} />
              <hr />
            </>
          )
        })
      }
  </div>
);

export default Main;

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.array.isRequired
  })).isRequired
};