/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding- the object left of the . is given .this/used with object literals
* 2. explicit binding- .this is explicitly defined.  Used with .call, .apply, .call
* 3. new binding- used with a constructor function refers to the object being created 
* 4. global/window binding- .this is given the value of the window or the global value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log (this);

//this points to the global scope or window

// Principle 2

// code example for Implicit Binding

const myObj ={
    greeting: 'hello',
    speak: function(){
        return `${this.greeting}, world!`
    }
};

myObj.speak();
//.this points to myObj

// Principle 3

// code example for New Binding

function Person(obj){
    this.name = obj.name;
    this.age = obj.ages;
    this.speak = function(){
        return `Hello, my name is ${this.name}, and I am ${this.age} years old!`
    }
};

const brandon = new Person ({name: 'Brandon', age: 34});
const alex    = new Person ({name: 'Alex', age: 7});
brandon.speak();

//.this points to the object created with the new function or the name left of the .

// Principle 4

// code example for Explicit Binding

function Person(obj){
    this.name = obj.name;
    this.age = obj.ages;
    this.speak = function(){
        return `Hello, my name is ${this.name}, and I am ${this.age} years old!`
    }
};

//const brandon = new Person ({name: 'Brandon', age: 34});
//const alex    = new Person ({name: 'Alex', age: 7});

brandon.speak.call(alex);
alex.speak.apply(brandon);

