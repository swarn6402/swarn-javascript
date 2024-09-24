// for-of loops: 

// in case of an Array:
const myNumbers = [1, 2, 3, 4, 5]

for (const num of myNumbers) {
    console.log(`The numbers are ${num}`);
}

//in case of a string
const greeting = "Hello Swarn!"

for (const greet of greeting) {
      if(greet == " ")
      continue         // to avoid printing the empty space
      console.log(`The characters are ${greet}`);
    }

// in case of Map: 

const myMap = new Map()

myMap.set('IN', "India")
myMap.set('US', "United States of America")
myMap.set('FR', "France")

for (const [key, value] of myMap) {
    console.log(key, ':-', value);
}

// in case of an Object, it will not execute and run, because objects are iterable in a different way

/* const myObj = {
    game1 : "Vice City",
    game2 : "IGI"
}

for (const [key, value] of myObj) {
    log(`The games are ${key} :- ${value}`)
} */