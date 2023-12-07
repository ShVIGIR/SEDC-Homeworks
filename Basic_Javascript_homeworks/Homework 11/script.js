//with if else

let year = parseInt(prompt(`Enter birth year:`));
let result;
let zodiacSign;

    function determinateZodiacSign(year) {

        result = year % 12;

        if (result == 0) {
            alert(`Monkey`);
        }
        else if (result == 1) {
            alert(`Rooster`);
        }
        else if (result == 2) {
            alert(`Dog`);
        }
        else if (result == 3) {
            alert(`Pig`);
        }
        else if (result == 4) {
            alert(`Rat`);
        }
        else if (result == 5) {
            alert(`Ox`);
        }
        else if (result == 6) {
            alert(`Tiger`);
        }
        else if (result == 7) {
            alert(`Rabit`);
        }
        else if (result == 8) {
            alert(`Dragon`);
        }
        else if (result == 9) {
            alert(`Snake`);
        }
        else if (result == 10) {
            alert(`Horse`);
        }
        else if (result == 11) {
            alert(`Sheep`);
        }

        else {
            alert(`ERROR`);
        }
    }

zodiacSign = determinateZodiacSign(year);
console.log(`Your zodiac sign is: ${zodiacSign}`);    //Ova ne mi funkcionira


//with switch case

// let year = parseInt(prompt(`Enter birth year:`));
// function determinateZodiacSign(year) {
//     switch (year % 12) {
//         case 0:
//             alert('Monkey');
//             break;
//         case 1:
//             alert('Rooster');
//             break;
//         case 2:
//             alert('Dog');
//             break;
//         case 3:
//             alert('Pig');
//             break;
//         case 4:
//             alert('Rat');
//             break;
//         case 5:
//             alert('Ox');
//             break;
//         case 6:
//             alert('Tiger');
//             break;
//         case 7:
//             alert('Rabbit');
//             break;
//         case 8:
//             alert('Dragon');
//             break;
//         case 9:
//             alert('Snake');
//             break;
//         case 10:
//             alert('Horse');
//             break;
//         case 11:
//             alert('Sheep');
//             break;
//     }
// }
// let result = determinateZodiacSign(year);
// console.log (result);