import React from 'react';
import './style.css';

const City = (props) => (
  <div>
    <h2>{props.name}</h2>
    <div className="cities">
      <div className="city">
        <div className="city__name">population: {props.population}</div>
        <div className="city__name">area: {props.area}</div>
        <div className="city__name">district: {props.district}</div>
      </div>
      <div className="city">
        <img src={props.photo} alt="" />
      </div>
    </div>
  </div>
)

export default City;