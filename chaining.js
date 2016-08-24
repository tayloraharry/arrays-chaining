var numbers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//sort numbers array in descending order
numbers = numbers.sort(function(first, second){return second - first});
console.log("step one:",numbers);

//remove numbers less than 19 from the numbers array
numbers = numbers.filter(function(x){return x <19});
console.log("step two:",numbers);

//multiply each remaining number by 1.5 and then subtract 1.
numbers = numbers.map(function(x){return x = (x*1.5)-1});
console.log("step three:",numbers);


//output (either in the DOM or the console) the sum of all the resulting numbers.
numbers = numbers.reduce(function(previousValue, currentValue, index, array) {return previousValue + currentValue;});

console.log((numbers));