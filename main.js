/* global data */

document.addEventListener('keydown', turnCar);
var $car = document.querySelector('.car');

function turnCar(e) {
  if (e.key === 'ArrowDown') {
    $car.className = 'car rotateDown';
    data.direction = 'south';
  }

  if (e.key === 'ArrowLeft') {
    $car.className = 'car rotateLeft';
    data.direction = 'west';
  }

  if (e.key === 'ArrowUp') {
    $car.className = 'car rotateUp';
    data.direction = 'north';
  }

  if (e.key === 'ArrowRight') {
    $car.className = 'car rotateRight';
    data.direction = 'east';
  }
}

// console.log($car.getBoundingClientRect());

var carCoordinates = $car.getBoundingClientRect();

data.coordinates.x = carCoordinates.x;
data.coordinates.y = carCoordinates.y;
