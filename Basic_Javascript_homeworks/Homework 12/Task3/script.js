console.log(`Task 3 - ATM`);

let lozinka = 1234;
let suma = 20000;

vnes = parseInt(prompt("Внеси го пинот на картичката"));

if (vnes == lozinka) {
    alert(`Имате ${suma} денари на располагање`);

    if (suma > 0) {
        gotovina = parseInt(prompt("Внесете ја саканата сума"));
        if (gotovina <= suma) {
            function presmetka(gotovina) {
                let result = suma - gotovina;
                return result;
            }
            let ostatokPari = presmetka(gotovina);
            alert(`Повлековте ${gotovina}денари. На вашата сметка остануваат уште ${ostatokPari}денари.`);
            alert(`Ви благодариме`);
        }
        else {
            alert(`Нема доволно средства. Обиди се со друга сума.`);
            alert(`Ви благодариме`);    //Ne mozev da napravam da se vrakja na pocetok
        }
    }
    else {
        alert(`Нема доволно средства.`);
    }
}

else {
    alert(`Внеси валидна лозинка!`)
}