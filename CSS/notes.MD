# CSS Notes

## Video 1 : How to add CSS

3 ways :

- Inline (target single element) ` <tag style="css"/>` (goes into same line of opening tag) example: ` <html style="background:blue"></html>` as _attributeName:value_
- Internal (target single webpage)` <style>css</style>` CSS is written inside style tag

```
<!DOCTYPE html>
<head>
 <style>
     html {
         background-color: red;
     }
 </style>
</head>
</html>
```

- External (target entire site)` <link href ="style.css"/>` ..[use this normally]..

```
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
</html>
```

## Video 2 : CSS Selectors

- Element Selectors : here h1 is an element (makes color red for all h1 occurences)

```
h1{
    color: red
}
```

- Class Selector : . selector is the class selector which can be added as an attribute to any html element mainly used for grouping elements. can be used for many elements

```
``html
<h1 class="i">
    hello!
</h1>

``css
.i {
    color: yellow;
}
```

- Id Selector (# sign) : similar to class selector. whats diffrent is only one unique id element per html file

```
# html
<h1 id="main">
    Welcome!
</h1>

# css

#main{
    color: green;
}
```

- Attribute Selector - select html elements with common attributes

html
``` 
<p draggable= "true">
    Lorem ipsum dolor sit amet consectetur adipisicing
  </p>
  <p draggable= "true">
    Lorem ipsum dolor sit amet consectetur adipisicing
  </p>
  <p> cbdhfgjyf effhejkdhfkl</p>

```
css
```
p[draggable]{
  color: blue; 
}
```
you may select the value of attribute as well
```
p[draggable="false"]{
  color: blue; 
}
```

- Universal Selector (*): it means to select all

## Video 3 : CSS Properties
### CSS Colors links: https://colorhunt.co/
### Font Sizes
 - 1 px(pixel) -> 1/96th inch = 0.26mm
 - 1 pt(point) -> 1/72nd inch = 0.35mm
 - 1 em (100% of parent) if parent 20 px then 1 em is 20px or if its 2 em its 2* (100 % of parent) -> 2*20px =40px
 - 1rem (100% of root) if the changes will affect rem values. Can use this for effectiveness instead of above
### Font Weights 
 - Keywords : normal, bold
 - Relative to parent : lighter(-100), bolder(+100)
 - number choose from 100-900 to determine how much bolder/lighter you want
### Font Family

## Video 4 : The Box model - Margin, Padding and Border
## Video 5: The Cascade : 
##### Position - 
```
li {
  color: blue; 
  color: pink; //pink replaces blue i.e. lower code replaces the upper one
}
```
##### Specificity - order of specificity as below 
        ___#id >> attribute >> .class >> element___
```
~ html
<li id="first-id" class="first-class" draggable></li>

~ css
li {
  color: blue;  //element selector
}
.first-class{
    color: green; //class selector
}

li[draggable]{
  color: yellow; //attribute selector
}

#firsy-id {
    color: pink;  //id selector: one page should only have one unique id
}

```
##### Type - Inline >> internal >> external
```
<link rel="stylesheet" href="style.css">  /**EXTERNAL**/

<style></style> /**INTERNAL**/

<h1 style= "">Hello</h1>  /**INLINE**/     

```

##### Importance - use !important keyword
```
h1{
  color: orange;
  color: cyan; !important
  color: yellow;
}
```
## Video 6: CSS Positioning : Relative, Absolute, fixed and static Positioning (see link for more)
https://appbrewery.github.io/css-positioning/ 

#### Static Positioning (Default)
#### Relative Positioning : Position relative to default position (see link for example)
#### Absolute Positioning : Position relative to nearest Positioned ancestor or top-left corner of webpage (see link for example)
   - ZIndex -brings the element above or below in Z-axis.
   - Absolute Positioning pulls the element out of normal html flow and to bring back we have to set position to anything other than absolute (static or relative).
#### Fixed Positioning: Position relative to top-left corner of browser (see link for example)
```
Hint: (Scroll to see the difference between absolute and fixed positioning)
```

## Video 7: CSS Display  (see link for example)
- Inline : in the same line (cant set width or height. it adjusts to the content size)
- Block : takes up entire block
- Inline-block : can set width and height and also same line
- None - makes the content dissapear for debugging purpose
```
https://appbrewery.github.io/css-display/
```

## Video 8: Responsiveness of a Website can be achieved by no. of methods given below
#### https://tastybasics.nl/  (see link to play with responsiveness)
- Media Queries
   * In width of 0-2400px max-width (600px) targets screen size from 0-600px(small screen)
     min-width(600px) targets bigger screensize 0r screensize greater than 600px
   * [Combine min and max] min-width(600px) and max-width (900px)=>  between 600-900px
   * max-width(600px) and min-width (900px) - space other than between 600-900px (outside space)
   * screen keyword/ print keyword
   * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (link for media queries resource)
- CSS Grid
- CSS Flexbox
- Bootstrap (External Frameworks)

## Video 9: Flexbox Intoduction

![Default display properties](/images/Capture.PNG)
* div -> display: block 
* span -> display: inline 
* p -> display: block 
* img -> display: inline 

![flexbox](/images/Flexbox.png)

- after applying display as flex the above happens 
- width of each element is equal to content size

![Flexbox: gap](/images/gap.PNG)

- gap can be added between elements as shown above

- display : flex (its a block that occupies the entire line(no neighbour allowed) similar like display:block)

![Flexbox: gap](/images/100block.PNG)

- display : inline-flex (it can allow a neigbour to come beside it just like display: inline-block)

![Flexbox: gap](/images/inline-flex.PNG)

## Video 10: Flexbox: Flex Direction (Row and Column Layouts)
- flex-direction: row;

![Flexbox:flex-direction: row; ](/images/flexdirectionrow.PNG)

- flex-direction: column;

![Flexbox:flex-direction: column; ](/images/flexdirectioncolumn.PNG)

- why the main and cross axis matter? : to customize our flexbox items

#### Flex basis (increases height or width with respect to main axis):
- flex-basis : 100px (flex-direction: column- main axis)

![Flexbox:flex-basis ](/images/flexbasis1.PNG)

- Above the height is changed

- flex-basis : 100px (flex-direction: row- main axis). Hence the width is changed

![Flexbox:flex-basis ](/images/flexbasis2.PNG)

[IMPORTANT]: **Basis should be applied to child and not the container**


## Video 11: Flexbox: Flex Layout **[Align, Justify, wrap]**
- **It is important to understand parent(container) and child(flexitem)relationship in flexbox** 
- order property - can change order of elements 
- flex-wrap: wrap - moves elements to next line in the row if previous row is full.
- play with this site [Flex Layout:Align, Justify, wrap examples](https://appbrewery.github.io/flex-layout/)
- `align-items: flex start` - we need to set viewport height for this property ex.`height: 70vh` because if we do se
   we can align our items if we have our container big  
- [FlexBox resource](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Align-content[works only when `flex-wrap: wrap`] 

###[Flexbox Game ](https://appbrewery.github.io/flexboxfroggy/)

## FLEX SIZING (Shrink or Grow) : Content width < width/ height < flex basis < min/max width
* below `min width` `max width` values are defaults but we can set it manually too(ex. ```min-width:200px```)
- `max width` looks for longest possible **sentence**
- `min width` looks for longest possible __word__
- if ```flex-basis(50px) < max-width(200px)``` flex basis will be implemented because max width of an item is 200px and flex 
  basis is still within the size range 
- flex-grow and flex shrink - shrink or grows to min/max with respect to combinations used
  ```
   flex-basis:0;
   combo1
 
   flex-grow: 0
   flex-shrink: 0

   combo2
   flex-grow: 0
   flex-shrink: 1

   combo3
   flex-grow: 1
   flex-shrink: 0

   combo4
   flex-grow: 1
   flex-shrink: 1
   
  ``` 

- Shortened above method
```
flex-basis:100px;
flex-grow: 0
flex-shrink: 0

to 
flex: 1 1 0; where values are (grow,shrink, basis) in order

even further shortcut
flex: 1
```
[Sizing exercise flexbox](https://appbrewery.github.io/flexbox-sizing-exercise/)
Solution code for above link
```
/* Write your CSS code below to make the blue items size, grow and shrink like the green ones.*/

.container {
  justify-content: space-between;
}
  
.container > * {

}

.item1 {
 flex-basis: 200px;
 flex-shrink: 1;
}

.item2 {
  flex-basis: 200px;
  flex-shrink: 0;
}

.item3 {
  flex-basis: 400px;
  flex-shrink: 0;
}


```


## Video 12 : GRID (A 2 Dimensional Layout system):
- you can use a Flexbox to layout items in 1 Dimensional space and Grid in a 2D space
- Use both Flexbox + Grid to create a good site
- [GRID-VS-Flexbox ..Play here](https://appbrewery.github.io/grid-vs-flexbox/)
- If you see below the boxes of flexbox are not aligned one below other perfectly like grid

![gridvsflexbox](/images/gridvsflexbox.PNG)

