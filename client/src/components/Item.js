import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '1em',
};

const Item = ({ itemInformation }) => (
  <div style={styles} >
    <h4>{itemInformation.title}</h4>
    <span>{itemInformation.listingInfo[0].listingType}</span>
    <span style={{color: 'green'}}>
      Price: ${itemInformation.sellingStatus[0].convertedCurrentPrice[0].__value__}
    </span>
  </div>
);

export default Item;

Item.propTypes = {

};