import React from "react";
import star from './../img/star.svg';
import propTypes from 'prop-types';

function Star(prop){
  /*const { count } = prop;
  const id = useId();
  console.log(typeof(count), count, id, shortid.generate());
  let arrStar = [];
  if((count > 5) && (typeof(count) != Number)) { arrStar = []; }
  for (let i = 0; i < count; i++) { arrStar.push({star: i});}
  return (
    arrStar.map((item) => {*/
      return (
        <li className="star_item">
          <img src={star} alt='star'/>
        </li>
      )
    /*})
  )*/
}


Star.propTypes = {
  count: propTypes.number
}
export default Star;
