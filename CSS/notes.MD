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

## Video 1 : CSS Selectors

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