import React from 'react';
import './Planet.css';

const Planet = ({ name, onClick }) => {
  return (
    <div className="planet" onClick={onClick}>
      <span className="planet-label">{name}</span>
    </div>
  );
};

export default Planet;
