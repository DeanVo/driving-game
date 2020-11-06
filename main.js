/* global data */

document.addEventListener('keydown', turnStartCar);
var $car = document.querySelector('.car');
var intervalID;

function turnStartCar(e) {

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

  if (e.code === 'Space') {
    if (data.engineRunning === false) {
      intervalID = setInterval(moveCar, 16);
      data.engineRunning = true;
    } else {
      clearInterval(intervalID);
      data.engineRunning = false;
    }
  }

}

document.addEventListener('keydown', moveCar);

function moveCar(e) {
  data.coordinates.x += 6;
  $car.style.top = data.coordinates.y + 'px';
  $car.style.left = data.coordinates.x + 'px';
}
