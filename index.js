function iterativeLog(array) {
  array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`);
    })
}

function iterate(callback) {
  var pets = ['cat', 'dog', 'fish', 'hamster'];
  pets.forEach(callback);
  return pets;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
