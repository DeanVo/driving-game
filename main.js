/* global data */

document.addEventListener('keydown', turnCar);

function turnCar(e) {
  var $car = document.querySelector('.car');
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
