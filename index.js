// Follow along with the examples here\
function doNothing() {}

function sayHelloTo(sayHello,name) {
    console.log("name: ", name);
    console.log("sayHello: ", sayHello);
    console.log(`${sayHello}, ${name}!`);
    
}

sayHelloTo("Hello", "Isabel");
sayHelloTo("Hello", "Sofia");
sayHelloTo("Hello", "Brendan");

function add(num1,num2) {
    return num1+num2;
    /*
    The difference between return and print is that print is literally just printing
    values. By using return, you are to use that returned value anywhere else in your code
    and not just print it, better yet if the return value is saved to a variable.
    */ 
}

add (5,8);
