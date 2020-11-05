document.addEventListener('keydown', turnCar);

function turnCar(e) {
  var $car = document.querySelector('.car');
  if (e.key === 'ArrowDown') {
    $car.className = 'car rotateDown';
  }

  if (e.key === 'ArrowLeft') {
    $car.className = 'car rotateLeft';
  }

  if (e.key === 'ArrowUp') {
    $car.className = 'car rotateUp';
  }

  if (e.key === 'ArrowRight') {
    $car.className = 'car';
  }
}
