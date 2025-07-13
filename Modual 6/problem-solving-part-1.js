// problem solving part 1

//kivabe akta array ar vitor theke even number gula output show korbo

const array = [10, 3, 4, 5, 5, 6, 6, 66, 88, 7, 7, 9];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    evenNumbers.push(array[i]);
  } else {
    oddNumbers.push(array[i]);
  }
  
}

console.log(evenNumbers);
