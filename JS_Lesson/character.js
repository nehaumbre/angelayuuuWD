var message = prompt("WRITE YOUR MESSAGE HERE...")
var msgLength = message.length
var totalLength = 180 - msgLength
alert("You have written " + msgLength + " characters" + " and left with " + totalLength + " characters")
//above code is for .length function

var message = prompt("WRITE YOUR MESSAGE HERE...")
var messageBeforeSlice = message.length
var message1 = message.slice(0, 180)
alert("You have written " + messageBeforeSlice + " characters . But only allowed " + message1.length)
console.log(message)
console.log(message1)
// above code is for slice(x,y) function

var name = prompt("What is your name")
var cap = name.slice(0, 1)
var name2 = cap.toUpperCase()
alert(name2 + name.slice(1, name.length))
//toUpperCase example: take name and convert its first letter to capital
//below is same but improvised also takes care of lower case ex. turns nEHA to Neha
var name = prompt("What is your name")
var firstCharacter = name.slice(0, 1)
var firstCharacterCap = firstCharacter.toUpperCase()
var remainingName = name.slice(1, name.length)
var remainingNameLower = remainingName.toLowerCase()
alert("Hello " + firstCharacterCap + remainingNameLower)


// DOg age calculator 
var age = prompt("WHat is your Dogs age")
var DogHumanAge = ((age - 2) * 4) + 21
alert("Your Dogs Human age is " + DogHumanAge + " years")

//increment and decrement

var x = 3;
var y = x++; //here y=3 because x++ and if ++x y=4
y += 1;

//functions in JS
function getMilk() {
    console.log("HELLO")
}
getMilk();

//function with value in parenthesis
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("moveLeft " + Math.floor(money / 8) + " bottles bought");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(30);


//function with return value
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("moveLeft " + Math.floor(money / 8) + " bottles bought");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 8
}

var change = getMilk(80);
alert("Your change is " + change)

//Complexity in functions

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert(calPurchase(money, 8) + " bottles bought");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 8
}

function calPurchase(Totalmoney, TotalItemstoPurchase) {
    var ItemsBought = Math.floor(Totalmoney / TotalItemstoPurchase);
    return ItemsBought;
}

var change = getMilk(81);
alert("Your Change is " + change)


// Clean version of above code
function getMilk(money) {
    alert(calPurchase(money, 8) + " bottles bought");
    return money % 8
}

function calPurchase(Totalmoney, TotalItemstoPurchase) {
    return Math.floor(Totalmoney / TotalItemstoPurchase);

}

alert("Your Change is " + getMilk(81))



//Evem Complex function
function getMilk(money, TotalItemstoPurchase) {
    alert(calPurchase(money, TotalItemstoPurchase) + " bottles bought");
    return change(money, TotalItemstoPurchase)
}

function calPurchase(Totalmoney, TotalItemstoPurchase) {
    return Math.floor(Totalmoney / TotalItemstoPurchase);
}

function change(Totalmoney, MoneyGiven) {
    return Totalmoney % MoneyGiven;
}

alert("Your Change is " + getMilk(20, 9))


//BMI Calculator 


function bmiCalculator(weight, height) {
    // return Math.round(weight / Math.pow(height, 2));  can use math.round
    return Math.floor(weight / (height * height));
    // return Math.floor(weight / Math.pow(height, 2)); you can use math.pow  for squares
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = bmiCalculator(65, 1.8);
alert("Your BMI is " + bmi);