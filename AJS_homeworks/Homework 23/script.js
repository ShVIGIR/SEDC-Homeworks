// # Exercise
// ## Create a class Animal that has:
// * name
// * type - carnivore/herbivore/omnivore
// * age
// * size
// * eat - a method that checks if the input is an Animal.
// 	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// 	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
// 	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
// 	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
// * isEaten = default false


class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type || ["carnivore", "herbivore", "omnivore"];
        this.age = age;
        this.size = size;

        this.eat = (input) => {
            if (input instanceof Animal) {
                if (type === "herbivore") {
                    console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
                } else if (input.size >= this.size * 2) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name}, but it was to large.`);
                } else {
                    this.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}.`);


                }
            } else {
                console.log(`The animal ${this.name} is eating the ${input}.`);
            }
        }
        this.isEaten = false;
    }
}

let animal = new Animal("leopard", "carnivore", 5, 70);
console.log(animal);
let animal2 = new Animal("cat", "carnivore", 2, 5);

console.log(animal2);
animal.eat(animal2);
let animal3 = new Animal("deer", "herbivore", 1, 45);
let animal4 = new Animal("bear", "omnivore", 2, 200);

animal.eat(animal4);
animal2.eat(animal3);
animal3.eat(animal2);
animal3.eat("grass");