import React from 'react';
import Proptypes from "prop-types";

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_AAA4C5E8C1E29791413BFBFF5419BA73.jpg",
    rating:5
  },
  {
    id:2,
    name:"Samgiyeopsal",
    image:
      "https://w.namu.la/s/cb69adb56d05e243ad090736320dae4a32711295e3c83c6311498f7397008fb5e5f810911f02b5f2611e5399424eb672d0366f47453943b318420caf00e3617dde1ef088490397e892d6414395345df07b764211e8f12656a5b6959cb8f6f23e6be601a7d76aac0be55ff98172623def",
    rating:4.4
  }
];

Food.propTypes = {
  name : Proptypes.string.isRequired,
  picture : Proptypes.string.isRequired,
  rating : Proptypes.number.isRequired
};

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <h1>hello!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
