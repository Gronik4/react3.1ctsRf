import React from "react";
import star from './../img/star.svg';
import propTypes from 'prop-types';

function Star(){
  return (
    <li className="star_item">
      <img src={star} alt='star'/>
    </li>
  )
}


Star.propTypes = {
  count: propTypes.number
}
export default Star;
