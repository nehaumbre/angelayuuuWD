var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;

    console.log(output);
}
//Output:(15) [1, 2, 'fizz', 4, 'Buzz', 'fizz', 7, 8, 'fizz', 'Buzz', 11, 'fizz', 13, 14, 'fizzBuzz']

// FIZZBUZZ problem ..: only works in  console
//USIng While loop
var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("fizz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzBuzz();
//OUTPUT
/*(100) [1, 2, 'fizz', 4, 'Buzz', 'fizz', 7, 8, 'fizz', 'Buzz', 11, 'fizz', 13, 14, 'fizzBuzz', 16, 17, 'fizz', 19, 'Buzz', 'fizz', 22, 23, 'fizz', 'Buzz', 26, 'fizz', 28, 29, 'fizzBuzz', 31, 32, 'fizz', 34, 'Buzz', 'fizz', 37, 38, 'fizz', 'Buzz', 41, 'fizz', 43, 44, 'fizzBuzz', 46, 47, 'fizz', 49, 'Buzz', 'fizz', 52, 53, 'fizz', 'Buzz', 56, 'fizz', 58, 59, 'fizzBuzz', 61, 62, 'fizz', 64, 'Buzz', 'fizz', 67,
 68, 'fizz', 'Buzz', 71, 'fizz', 73, 74, 'fizzBuzz', 76, 77, 'fizz', 79, 'Buzz', 'fizz', 82, 83, 'fizz', 'Buzz', 86, 'fizz', 88, 89, 'fizzBuzz', 91, 92, 'fizz', 94, 'Buzz', 'fizz', 97, 98, 'fizz', 'Buzz']*/

// Who is buying lunch? Problem 
function whosPaying(names) {
    
    /******Don't change the code above*******/
        var i = 0;
        var random = Math.random(names[i]);
        var RandomName = Math.floor(random*(names.length));
    
        var result = names[RandomName];
        return result+ " is going to buy lunch today!";
      
    
    /******Don't change the code below*******/    
    }

//99 Bottles problem

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// My Version
var Bottles = 99;
while (Bottles >= 0) {
    var word = "bottles";
    if (Bottles === 1) {
        word = "bottle";
    }
    console.log(Bottles + " " + word + " of beer on the wall, " + Bottles + " " + word + " of beer. Take one down and pass it around, ");
    Bottles--;
    console.log(Bottles + " " + " bottles of beer on the wall.");
}
//improvised version
var Bottles = 99;
while (Bottles >= 1) {
    var word = "bottles";
    if (Bottles === 1) {
        word = "bottle";
    }
    console.log(Bottles + " " + word + " of beer on the wall, " + Bottles + " " + word + " of beer. Take one down and pass it around, ");
    Bottles--;
    if (Bottles === 0) {
        console.log("No More bottles of beer on the wall.");
    }
    else {
        console.log(Bottles + " " + " bottles of beer on the wall.");
    }
}

function FibGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
output = FibGenerator(8);
console.log(output);
