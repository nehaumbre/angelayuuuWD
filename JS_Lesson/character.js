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