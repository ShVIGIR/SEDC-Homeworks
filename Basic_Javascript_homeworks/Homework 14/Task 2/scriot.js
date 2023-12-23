// Task 2
// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)




let array = [5, 2, 4, 7];

let listaOdBroeviVoNiza = document.getElementById("numberList");
let sumaOdBroeviteVoNizata = document.getElementById("suma");
// let celaOperacija = sumaOdBroeviteVoNizata.nextElementSibling;     

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        listaOdBroeviVoNiza.innerHTML += `<li>${numbers[i]}`;
        sumaOdBroeviteVoNizata.innerHTML = (`THE SUM IS: ${sum}`);
   
    }
    return sum;
}

sum(array);
