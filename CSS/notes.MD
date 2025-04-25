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
