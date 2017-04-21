## JavaScript interactive buttons

### Setup

Create a new folder somewhere in your project. Create the following files inside of that folder

1. index.html
2. main.js
3. styles.css

Start by putting the following in your html file
```html
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <button id="button">Click me!</button>
            <p id="output">You haven't clicked the button!</p>

            <script src="main.js"></script>
        </body>
    </html>
```

You can customize this quite a bit. You can replace the button with some text, 
a picture, or any other html element

### Lesson

#### Variables and arrays

In JavaScript, variables and arrays can be useful to hold or set values. 
Today we will learn about how to use these to create interactive web pages.

To declare a variable, put word `var` in front of the variables name. 

Example:
```js
    var x;
    var y;
    var height;
    var favoriteWord;
```

To set a variable, we can put an equal sign than value after the variable name.
We can do this with the line that has var on it, or on a new line.

Example
```js
    var x = 5;
    x = 7;
    x = 10;
```

A variable can hold a number, string, array, and other data types that I won't cover here.
We will be creating a variable that holds an array.

To create an array, set a variable to a set of brackets.
```js
    var lines = []
```

Strings can hold a series of letters. They are just words inside of double quotes.

We want to fill the array with strings that we would want to insert onto the page.
```js
    var lines = ["You clicked the button once", "You clicked the button again", "And again..."];
```

Notice that each element of the array is separated by a comma.

Great! Now we have an array. We just need a way to access it...

Arrays are just a collection of variables and can be resized to hold a very large amount of data.
To access an element in the array, we just need to put a bracket after the name telling what element
we want to access. The computer counts from zero, so the first element in an array will be at 0.

**Remember that computer count from zero, not one!**

Here is an example
```js
    var elements = [1, 2, 3, 4];
    elements[0] = 5; // set the first element, or element zero, to 5
    alert(elements[1]); // Outputs 2, the first element is element zero, not element one
```

#### If statements and functions

If you need to test for something in JavaScript, you can set up an if statement

They look like this usually
```js
    if(x == 5){
        alert("its 5");
    }
    else if(x == 6){
        alert("its 6");
    }
    else{
        alert("its neither");
    }
```

They are structured like this
```js
    if(condition){
        // code here
    }
```

Notice that you use == for comparing values, not = (used to set values).

Also, if you need less than or equal to (or greater than or equal to) you need to use >= or <=

Functions are structured similar to if statements, but don't have conditions in their parenthesis

Example:
```js
    // With arguments
    function functionName(arguments, separated, with, commas){
        // code here 
    }
    // Without arguments (We need this one)
    function secondFunction(){
        // code here
    }
    // A variable set to a function
    var functionThree = function(){
        // code here
    }; // These ones end with a semicolon where the other ones don't
```

They are used to quickly execute the code inside of the function. You don't have to have
anything inside of the parenthesis if you don't need a value to be passed. A concept that
I will go over later. To call a function, just do this.

```js
    functionName("argument", 100, 50, 25); // With arguments
    secondFunction(); // Without arguments
    functionThree(); // Calling the variable one 
```

#### DOM manipulation

To set an element on a webpage with just JavaScript, you need to select it and set the innerHTML

This is done by selecting the element with the document.getElementById function and then storing
it as a variable. Afterwards, we just set the innerHTML property. It's done better with an
example, so here is one:

```js
    var element = document.getElementById("output");
    element.innerHTML = "new output";
```

If you place that inside of your JavaScript file, you will see the output text box change.
(If this doesn't work, call me over)

### Putting it all together

Now we want a button that cycles though different lines or phrases.
First we should set up our array and a counter. This is what mine looks like:

```js
    var counter = 0;
    var lines = ["Clicked once!", "Clicked again!", "And again..."];
```

Next we want the button to do something when it is pressed. So we set a property called "onclick"
which tells the button what to do when pressed. This is done the same as setting the innnerHTML,
but we are setting it to a function.

```js
    var button = document.getElementById("button");
    button.onclick = switcher; // No parenthesis
```

Lets define that function that we just made a reference to above. We want something
that looks remotely like this.

```js
    // Create a function for changing the output (every time the button is pressed)
    function changeOutput(){
        // Get the element of the output
        var output = document.getElementById("output");

        // If the counter is less than or equal to 1, than get the correct line from lines
        if(counter <= 1){
            output.innerHTML = lines[counter];
            counter++; // This expands to counter = counter + 1;
        }
        else{
            // Otherwise, do the same thing, but don't increment counter
            output.innerHTML = lines[counter];
        }
    }
```

### Mix it up

Now make it your own. Make something that counts through numbers. Make something that
chooses a random line, or even something that switches between different pictures.

If you need some help with this project, ask me.
