var numbers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

numbers = numbers.sort(function(first, second){return second - first}).filter(function(x){return x <19}).map(function(x){return x = (x*1.5)-1}).reduce(function(previousValue, currentValue, index, array) {return previousValue + currentValue})

console.log((numbers));
