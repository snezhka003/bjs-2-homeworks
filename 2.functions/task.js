// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];  
    } else if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];
  }

  avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);

    if (sum > max) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;

  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];  
    } else if (arr[i] < min) {
      min = arr[i];
    };
  }

  return Math.abs(max - min);
}

makeWork([[-10, -20, -40], [10, 20, 30]], worker2);
makeWork([[0, 0, 0], [-1, -99]], worker2);