console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i + " is odd");
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for ( let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } 
    else if (i % 3 === 0) {
      console.log('FIZZ');
    } 
    else if (i % 5 === 0) {
      console.log('BUZZ');
    } 
    else {
      console.log(i);
    }
  }

  // Excercise 3
  
  //EXCERCISE 1 WHILE
  
  let i = 1;

  while (i <= 100) {
    if (i % 2 !== 0) {
      console.log(i);
    }

    i++; }

 1
 // EXCERCISE 1 DO/WHILE 
  let i = 1;

  do {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  } while (i <= 100);
 
 // EXCERCISE 2 WHILE
 
 
  let i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
  i++;
}

// EXCERCISE 2 DO/WHILE
let i = 1;
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
  i++;
} while (i <= 100);


//EXCERCISE 4 

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Did not find value");
}


//BONUS EXCERCISE

