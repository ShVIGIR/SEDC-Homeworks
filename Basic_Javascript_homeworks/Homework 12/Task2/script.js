console.log("Task 2 - Calculation");


function dogCalculator() {
    let direction = prompt("Type `1` if you want to convert into dog years, type `2` if you want to convert into human years");

    if (direction == `1`) {
        let years = Number(prompt("Type number of years in years"));
        let dogAge = years * 7;
        return dogAge + " dog";
    }

    else if (direction == `2`) {
        let years = Number(prompt("Type number of years"));
        let humanYears = years / 7;
        return humanYears + " human";
    }
    else{
        alert (`Error`);
    }
}
let dog = dogCalculator();
alert(`Dog have ${dog} years.`);


