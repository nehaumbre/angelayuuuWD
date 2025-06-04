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
