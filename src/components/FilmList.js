import React from 'react';
import star from './../img/star.svg';
import shortid from 'shortid';

function FilmList(prop) {
  const { data } = prop;
  console.log(data);

  function Star() {
    return (
      <li className='star_item'>
        <img src={star} alt='star'/>
      </li>
    );
  }

  return (
    data.map((item) => {
      let arrCount = [];
      
      if (item.count > 5 || typeof(item.count) != 'number' || (!item.count)) {
        arrCount = [];
      } else {
        for (let i = 0; i < item.count; i++) { arrCount.push({star: i});}
      }
      const clss = `card ${item.flag}`;
      return (
        <div className={clss} key={shortid.generate()}>
          <h2 className='film_name'>{item.name}</h2>
          <ul className='card-body-stars'>
            {arrCount.map((el) => { return <Star key={el.star.toString() + item.name}/>})}
          </ul>
        </div>
      );
    })
  );
}

export default FilmList;
