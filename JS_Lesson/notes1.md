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
