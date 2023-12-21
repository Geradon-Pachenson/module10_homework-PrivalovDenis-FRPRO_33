//Задание 6
let arr = [11, 11, 11, 11, 11, 2,];
let i = 0;
let result = arr.every(function(item, index, array) {
  if (arr[1] === arr[i++]) {
    return true;
  }
  else {
		return false;
	}
  });
  console.log(result);