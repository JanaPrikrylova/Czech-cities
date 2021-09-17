import React from 'react';
import { render } from 'react-dom';
import './style.css';
import City from './City';
import cities from './cz-cities.js';

const App = () => (
  <>
    <h1>Czech cities</h1>
    {cities.map((city) => (
      <City
        name={city.name}
        population={city.population}
        area={city.area}
        district={city.district}
        photo={city.photo}
        key={city}
      />
    ))}
  </>
);

render(<App />, document.querySelector('#app'));
