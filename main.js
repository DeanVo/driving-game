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
  if (data.direction === 'east') {
    data.coordinates.x += 6;
    $car.style.left = data.coordinates.x + 'px';
  }

  if (data.direction === 'south') {
    data.coordinates.y += 6;
    $car.style.top = data.coordinates.y + 'px';
  }

  if (data.direction === 'north') {
    data.coordinates.y -= 6;
    $car.style.top = data.coordinates.y + 'px';
  }

  if (data.direction === 'west') {
    data.coordinates.x -= 6;
    $car.style.left = data.coordinates.x + 'px';
  }
}
