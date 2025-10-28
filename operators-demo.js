// Import RxJS functions and operators
const { of, from, merge, zip, concat } = require('rxjs');
const { map, filter, flatMap, reduce } = require('rxjs/operators');

// Create a source observable
const numbers$ = from([1, 2, 3, 4, 5]);

// MAP Operator
console.log("---- MAP Operator ----");
numbers$
  .pipe(map(x => x * 2))   // transform each emitted value to multiply it by 2
  .subscribe(result => console.log(result));


// FILTER Operator
console.log("---- FILTER Operator ----");
numbers$
  .pipe(filter(x => x % 2 === 0))  // filter even numbers
  .subscribe(result => console.log(result));


// FLATMAP Operator
console.log("---- FLATMAP Operator ----");
const letters$ = from(['A', 'B', 'C']);
letters$
  .pipe(flatMap(letter => from([letter, letter + "1"])))  // map each letter to an Observable and flatten the results
  .subscribe(result => console.log(result));


// REDUCE Operator
console.log("---- REDUCE Operator ----");
numbers$
  .pipe(reduce((acc, val) => acc + val, 0))  // accumulate values
  .subscribe(result => console.log(result));


// MERGE Operator
console.log("---- MERGE Operator ----");
const stream1$ = of('A', 'B', 'C');
const stream2$ = of('1', '2', '3');
merge(stream1$, stream2$)
  .subscribe(result => console.log(result));  // combine multiple streams, emitting values as they arrive


// ZIP Operator
console.log("---- ZIP Operator ----");
zip(stream1$, stream2$)
  .subscribe(result => console.log(result));  // combine elements pairwise


// CONCAT Operator
console.log("---- CONCAT Operator ----");
concat(stream1$, stream2$)
  .subscribe(result => console.log(result));  // emit all values from one Observable, then the next
