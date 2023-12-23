//Task 3
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)



const naslov = document.getElementById ("naslov");
// const recept = document.getElementById("recept");


let nameOfRecipe = prompt("Внесете име на рецептот:");
let number = parseInt(prompt("Внесете број на состојки кои ви се потребни за овој рецепт:"));

let ingredients = [];
for (let i = 1; i <= number; i++) {
    let ingredient = prompt(`Внесете состојка ${i}:`);
    ingredients.push(ingredient);
}

naslov.innerHTML = (`<h1>${nameOfRecipe}</h1>`);

ingredients.innerHTML = ("Ingredients:");
document.write("<ul>");

for(let j = 0; j < ingredients.length; j++){
   document.write ("<li>" + ingredients[j] + "</li>")
}
document.write("</ul>");

//bonus x
