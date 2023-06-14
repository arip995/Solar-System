import React, { useState } from 'react';
import Sun from './Sun';
import Planet from './Planet';
import './SolarSystem.css';

const SolarSystem = () => {
  const planets = [
    { name: 'Mercury', distanceFromSun: 36, size: 'Small', radius: '2,439 km', moons: 0 },
    { name: 'Venus', distanceFromSun: 67, size: 'Medium', radius: '6,051 km', moons: 0 },
    { name: 'Earth', distanceFromSun: 93, size: 'Medium', radius: '6,371 km', moons: 1 },
    { name: 'Mars', distanceFromSun: 142, size: 'Small', radius: '3,389 km', moons: 2 },
    { name: 'Jupiter', distanceFromSun: 484, size: 'Large', radius: '69,911 km', moons: 79 },
    { name: 'Saturn', distanceFromSun: 886, size: 'Large', radius: '58,232 km', moons: 82 },
    { name: 'Uranus', distanceFromSun: 1782, size: 'Medium', radius: '25,362 km', moons: 27 },
    { name: 'Neptune', distanceFromSun: 2793, size: 'Medium', radius: '24,622 km', moons: 14 },
  ];

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    console.log(planet)
    setSelectedPlanet(planet);
  };

  const handleCloseModal = () => {
    setSelectedPlanet(null);
  };

  const renderPlanetInfo = () => {
    if (selectedPlanet) {
      return (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedPlanet.name}</h2>
            <p>Distance from Sun: {selectedPlanet.distanceFromSun} million km</p>
            <p>Size: {selectedPlanet.size}</p>
            <p>Radius: {selectedPlanet.radius}</p>
            <p>Number of Moons: {selectedPlanet.moons}</p>
          </div>
        </div>
      );
    }
    return null;
  };
  

  return (
    <div className="solar-system">
      <Sun />
      {planets.map((planet, index) => (
        <Planet key={index} name={planet.name} onClick={() => handlePlanetClick(planet)} />
      ))}
      {renderPlanetInfo()}
    </div>
  );
};

export default SolarSystem;
