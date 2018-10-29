import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  alignItems: 'flex-start',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  padding: '1em',
};

const Item = ({item}) => {
  const { itemURL, title, postType, soldPrice } = item;

  return (
    <div style={styles} >
      <h4>
        <a 
          href={itemURL}
          target="_blank"
        >
          {title}
        </a>
      </h4>
      <span>{postType}</span>
      <span style={{color: 'green'}}>
        Price: ${soldPrice}
      </span>
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    endTime: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    itemURL: PropTypes.string.isRequired,
    postType: PropTypes.string.isRequired,
    soldPrice: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};