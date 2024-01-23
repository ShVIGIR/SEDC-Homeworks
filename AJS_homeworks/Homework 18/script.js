// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
// * Planet Name
// * Population
// * Climate
// * Gravity

// There should be a function that makes the call to the api for the planets ( should have URL for a parameter )
// There should be a function that prints planets in to the table
// **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
// **API URL: ** https://swapi.dev/api/planets/?page=2


//Task 1 ; Task 2

let container = document.getElementById("tableContainer");
let secondContainer = document.getElementById("secondContainer");
let printButton = document.getElementById("printBtn");
let nextButton = document.getElementById("nextBtn");
let previousButton = document.getElementById("previousBtn");
nextButton.style.display = "none";
previousButton.style.display = "none";


let counter = 1;

function callSomeone() {


    let url = `https://swapi.dev/api/planets/?page=${counter}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);

            if (data.next) {
                nextButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "none";
            }

            if (data.previous) {
                previousButton.style.display = "inline-block";
            } else {
                previousButton.style.display = "none";
            }
            secondContainer.innerHTML = " ";
            for (let i = 0; i < data.results.length; i++) {
                let result = data.results[i];

                secondContainer.innerHTML += `
            <tr>
            <td>${result.name}</td>
            <td>${result.population}</td>
            <td>${result.climate}</td>
            <td>${result.gravity}</td>
            </tr>`
            }
            container.appendChild(secondContainer);
        })

}
printButton.addEventListener("click", callSomeone);

nextButton.addEventListener("click", () => {
    counter++;
    secondContainer.innerHTML = callSomeone();
});

previousButton.addEventListener("click", () => {
    if (counter > 1) {
        counter--;
        callSomeone();
    }
})

