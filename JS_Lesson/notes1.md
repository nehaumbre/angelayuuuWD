# JAVASCRIPT

- try `alert("hello")` in console
- try ` alert("HEllow"); 'shift+enter' alert("world");` - this is multiline console
- data Types - String`typeof("")` , Numbers `typeof(1)`, Boolean`typeof(true)` try typeof("some data type to get the type of data entered")

[challenge function](https://stanford.edu/~cpiech/karel/ide.html)

#### Math.random

- generates random number upto 16 decimal places range(0-0.9999999999999999)

```
var n = Math.random();
alert(n);
Output : 0.6437822494888216
```

- Code for Rolling a dice - below code only gives range upto 5 and not 6 so we do diceRoll+1

```
var n = Math.random();
var diceRoll = Math.floor(n*6);
console.log("You rolled a " + (diceRoll+1));

```

- Code for LOVE Calculator

```
prompt("HI This is Love CALCULATOR!! ENTER YOUR NAME");
prompt("Enter your Crush's Name")
var LoveScore = Math.random();
LoveScore = Math.floor(LoveScore*100);
alert("You Love Score is " + (LoveScore+1) + "%");
```

- Code for LOVE Calculator with if-else

```
prompt("HI This is Love CALCULATOR!! ENTER YOUR NAME");
prompt("Enter your Crush's Name")
var LoveScore = Math.random();
LoveScore = Math.floor(LoveScore*100);

if (LoveScore > 50) {
alert("You Love Score is " + (LoveScore+1) + "%. DAMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN!!");
}
else
{
alert("You Love Score is " + (LoveScore+1) + "%. GNARLYYYYYYYYYYYYYYYYYYY!!");
}
```

- Comparison operators

```
===(cares about data type)/==(doesn't care about data type) Is equal to
!== Is not equal to
>   Is greater than
<   Is less than
>=  Is greater than equal to
<=  Is less than equal to
```

- Combining Comparison operators

```
&& AND
|| OR
!  NOT
```

- Code for Leap Year Calculation
  - Logic -
    - There are three main rules to determine whether a year is a leap year or not:
    1. If the year is divisible by 4, it is a leap year.
    2. If the year is divisible by 100, it is NOT a leap year unless it is also divisible by 400.
    3. If the year is divisible by 400, it is a leap year.

```
function isLeapYear(year) {
    DivideByFour = year%4;
    DivideByHundred = year%100;
    DivideByFourHundred = year%400;

    console.log(DivideByFour);
    console.log(DivideByHundred);
    console.log(DivideByFourHundred);

    if(DivideByFour === 0 ){

        alert("The Year " +year+ " is leap");
    }
    else if (DivideByHundred === 0 )
    {
        alert("The Year " +year+ " is not leap");
    }
    else if (DivideByHundred === 0 && DivideByFourHundred === 0)
    {
        alert("The Year " +year+ " is leap");
    }
    else {
        alert("The Year " +year+ " is not leap");
    }
}

isLeapYear(2024);
isLeapYear(2023);
isLeapYear(2020);
isLeapYear(2012);
isLeapYear(2008);
isLeapYear(2006);


```

```
function isLeapYear(year) {

    if(year%4 === 0 ){
        if(year%100 === 0){
           if(year%400 === 0){
               return year + "-is Leap"
           }
            else {
                return year + "-is NOT Leap"
            }
        }
        else
        {
           return year + "-is Leap"
        }
    }
    else {
        return year + "-is NOT Leap"
    }
}

var isLeap = isLeapYear(2006);
alert(isLeap);


//Improved version
```

- GUESTLIST Code: ARRAYS

```
var guestList = ["TOM", "JERRY", "WINNY", "JUICE"];
var name = prompt("WHAT is YOur name?");

function isGuest(name) {
    if (guestList.includes(name)){
        return "YOU ARE A GUEST";
    }
    else{
        return "NOPE!!!"
    }
}
alert(isGuest(name));
```

# DOM (Document Object Manipulation)

- Project Setup: A new project folder named 'DOM' is created, along with a basic HTML file called 'index.html.'

### Methods of Adding JavaScript:

- Inline JavaScript: Demonstrates triggering a JavaScript alert on page load using the 'onload' attribute.

`<body onload="alert('Hello');">`

- Internal JavaScript: Shows how to include JavaScript using a
  `<script>` tag within the HTML, allowing for cleaner code.

  ```
  <script>
        alert("Hellllllo");
  </script>
  ```

- External JavaScript: Explains linking an external JavaScript file using the `<script>` tag with a 'src' attribute, demonstrating its independence from the HTML.

- Script Tag Position: The instructor highlights that JavaScript should typically be placed at the _end_ of the `<body>` to ensure all HTML elements are loaded before manipulation, unlike CSS which goes in the `<head>`.

- Next Lesson Preview: The session concludes by previewing the next lesson focused on the Document Object Model (DOM) for selecting and manipulating HTML elements.

# DOM exercise- run in console

> document
> document.firstElementChild and document.LastElementChild
> var heading = document.lastElementChild.lastElementChild.querySelector("h1")
> heading.innerHTML = "PINK"

- Exercise by angela

  > var list = document.getElementsByClassName("list")
  > list[2].innerHTML = "YT";
  > document.body.querySelector("h1").style.color ="yellow"
  > document.body.querySelector("input").click() - this is a method that is invoked to click the checkbox
  > document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";

- Accessing Properties and Methods:

  - Properties describe attributes of elements, and methods represent actions.
    The lecture emphasizes using dot notation for accessing and modifying these properties.

#### Accessing properties and methods in the Document Object Model (DOM) is essential for manipulating HTML elements with JavaScript. Here's a breakdown:

- Properties: Properties are attributes that describe an object. For example, an HTML button object might have properties like innerHTML, which determines the button's text, or style, which defines its CSS styles.

- Methods: Methods are actions that an object can perform. For instance, click() is a method that simulates a mouse click on an element, leading to an action such as checking a checkbox.

- Dot Notation: You access the properties and methods of an object using dot notation. For example, if you have an object named car, you can access its color with car.color or invoke a method like car.drive().

`Getting Started: The DOM enables these interactions dynamically. When a web page loads, the browser converts the HTML structure into a tree of objects, allowing developers to programmatically access and manipulate elements.`

> document.getElementsByTagName("li")[2].style.color = "cyan";
> document.getElementsByTagName("li").length

```
document.getElementsByClassName
document.getElementsById

```

There are different methods to access HTML elements.

    1)getElementById()

    2)querySelector()

    3)getElementsByClassName()

    4)getElementsByTagName()

    5)querySelectorAll()

- Adding and Deleting Elements using DOM Elements.

  > Now, let’s discuss the methods that we can use for adding and deleting elements. There are various methods that help us to achieve this.

      1)document.createElement()

      2)document.removeChild()

      3)document.appendChild()

      4)document.replaceChild(new, old)

      5)document.write()

> document.querySelector("li a");

`<a href=​"https:​/​/​www.google.com" style=​"background:​ red;​ border-bottom-color:​ brown;​">​Google​</a>​`

> document.querySelector("li a").style.background = "red";

> document.querySelector("li.list"); // to select this `<li class="list">`

#### difference between `querySelector` and `querySelectorAll`

> document.querySelector("li.list"); // gives only first element
> document.querySelectorAll("li.list"); // gives all elements

```
NodeList(3) [li.list, li.list, li.list]
0 : li.list
1 : li.list
2 : li.list
length:3
```

> Exercise : document.querySelector("li a").style.color ="red";

#### Manipulating and Changing Styles of HTML Elements with Javascript

`document.querySelector("button").style.backgroundColor ="yellow";`

> In JS the style value should be given as string as `"yellow"` in above example
> and the css property in CamelCase `backgroundColor` in above example

> Refer this link for more styles [HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

> Add class by using `classList.add` and remove by `classList.remove`

```
document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible"); //for both
```

> EXERCISE : `document.querySelector("h1").classList.toggle("huge");`

#### Text Manipulation and the Text Content Property

- This lecture focuses on how to manipulate text within HTML elements using two main properties: innerHTML and textContent.
- innerHTML: Returns HTML code inside the selected tag

  > This property allows you to retrieve and modify the HTML content inside an element's tags, including nested tags. For example, changing the innerHTML of an h1 element can include rich HTML structures like adding a strong tag.

- textContent:Returns only text inside the selected tag
  > In contrast, this property strictly returns the text inside an element without any HTML tags, ensuring only plain text is handled.

#### Manipulating HTML Element Attributes:

```
document.querySelector("a").attributes
> NamedNodeMap {0: href, href: href, length: 1}
document.querySelector("a").getAttribute("href");
>'https://www.google.com'
document.querySelector("a").setAttribute("href", "www.bong.com");
> undefined
document.querySelector("a").getAttribute("href");
> 'www.bong.com'
```

# COMMAND LINE LESSON :

> ls

> Ctrl + U : to clear the line

> touch abc.txt: creates file

> start abc.txt: opens file

> rm abc.txt : remove file

> pwd: print working directory

> mkdir : create directory

> rm -r dirName : removes directory

[CMD practise](https://www.learnenough.com/command-line-tutorial)

# DOM PART 2

- handleClickEvent is called without () [`handleClickEvent()`] not like this because this executes the
  function upon page refresh but we want to execute it when we click on the button, therefore no braces.

  ```
  document.querySelector("button").addEventListener("click", handleClickEvent);
  function handleClickEvent() {
    alert("I was CLIKED 👩🏻");
    }
  ```

- Anonymus function : the above code can be written using anonymous function

  ```
  document.querySelector("button").addEventListener("click", function () {
    alert("I was CLIKED 👩🏻");
  });
  ```

- Exercise: Make all buttons pop the same alert when clicked
- Solution:

  ```
  for (i = 0; i < (document.querySelectorAll("button")).length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("I was CLIKED 👩🏻");
  });
  }
  ```

- Playing in console
  > $0.innerHTML= "BLUEDART"

```
 $0.addEventListener("click", function () {
    alert("I got clicked!");
});

$0.addEventListener("click", respondToClick);
function respondToClick() {
    alert("I got clicked!");
}

$0.addEventListener(input1, input2);
function respondToClick() {
    alert("I got clicked!");
}
/*where input1 = what event to listen to
        input2 = what to do in response to that event*/

```

#### Higher Order functions: functions that can take other functions as inputs

```
function add(num1, num2){
   return num1 + num2;
}
add(6,3)
9
function subtract(num1, num2){
   return num1 - num2;
}
subtract(6,3)
3
function multiply(num1, num2){
   return num1 * num2;
}

multiply(6,3)
18
function divide(num1, num2){
   return num1 / num2;
}

divide(6,3)
2
// higher order function calculator with function operator as an input

function calculator(num1, num2, operator){
   return operator(num1,num2);
}


calculator(6,3,add);
9
calculator(6,3,subtract);
3
calculator(6,3,multiply);
18
calculator(6,3,divide);
2

```

# JS Objects

- Constructor function(not camel case but starts from capital letter) to create multiple objects of same/common properties

```
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name,
    this.age = age,
    this.hasWorkPermit = hasWorkPermit,
    this.languages = languages
}
```

- Initializing constructor function(also called factory)

```
var BellBoy1 = new BellBoy("Timmy", 19, true,["english", "french"]);

```

### Exercise By angela: create a factory to create objects for Housekeepers

```
function HouseKeeper(name, age, YearsOfExp, hasWorkPermit, hotelsWorkedAt) {
    this.name = name,
    this.age = age,
    this.YearsOfExp = YearsOfExp
    this.hassWorkPermit = hasWorkPermit,
    this.hotelsWorkedAt = hotelsWorkedAt
}


var HouseKeeper1 = new HouseKeeper("Zoya", 26, 4, true, ["TAJ","WINEARY"]);
var HouseKeeper2 = new HouseKeeper("NIJaK", 30, 7, true, ["TAJ","WINEARY","SEAMER", "O2VILLAS"]);
               .
               .
               n
console.log(HouseKeeper1);
```

### Methods: What if the BellBoy Moves the luggage. (We need to have this function in the object itself)

```
function moveLuggage(){
    alert("May I take your Luggage?");
    pickUpLuggage();
    move();
}
```

- Provide the name of function as new and after the colon(:) we put the anonymous function

```
var bellBoy1 = {
  name: "Zoya",
  age: 26,
  YearsOfExp: 4,
  hassWorkPermit: true,
  moveLuggage: function () {
    alert("May I take your Luggage?")
    pickUpLuggage()
    move()
  },
}
```

- call the `bellBoy1.moveLuggage();` to execute the function.
- Exercise for cleaning function of Housekeeper

```
function HouseKeeper (name, age, YearsOfExp) {
    this.name = name,
    this.age = age,
    this.YearsOfExp = YearsOfExp
    this.clean = function () {
      alert(" Cleaning in progress..");
    }
}
```

> Console Output:
> var HouseKeeper4 = new HouseKeeper("NIJaK", 30, 7);
> HouseKeeper4.clean()
> // alert Comes as set in funtion
> **[Note]** : HouseKeeper4.clean(); executes the function

                HouseKeeper4.clean gets the value of function as **below**

                {
                   alert(" Cleaning in progress..");
                }

### Callback functions:

=================================================================

- **respondToKey** is a callback function

```
document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
  console.log("key is pressed");
}

// try below in console
======================================================================
$0.addEventListener("click", function(event) {
        console.log(event);
})
undefined
VM406:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM406:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM406:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

```

- here '**event**' the name can be anything you like ex. evt, et,...etc

