// Task 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs

class Animal {
    constructor(name, kind) {
        this.animalName = name,
            this.animalKind = kind
    }
    speak(message) {

        alert(`${this.animalName} says: "${message}"`);
    }
}
const animal = new Animal('Tom', 'cat');
const animal2 = new Animal('Stuart', 'rat');
const animal3 = new Animal('Simba', 'lion');

animal.speak("Hello there!");
animal2.speak("Bye, bye!");
animal3.speak("Meat please.");

// console.log(animal);
// console.log(animal2);
// console.log(animal3);


//with inputs in HTML

// let button = document.getElementById("btn");
// button.addEventListener('click', function () {
//     let name = document.getElementById("name").value;
//     let kind = document.getElementById("kind").value;
//     let message = document.getAnimations("message").value;

//     let animal = new Animal(name, kind);
//     animal.speak(message);
// });

// with prompt

// function animal() {
//     let name = prompt("Enter name of the animal: ");
//     let kind = prompt("Enter kind of the animal: ");
//     let message = prompt("Enter message: ");
//     let animal = new Animal(name, kind);
//     animal.speak(message);
// }

// animal();





