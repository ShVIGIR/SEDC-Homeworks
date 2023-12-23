// Task 1
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed


let prvDiv = document.getElementById ("first");
let naslov = document.getElementById ("myTitle");
let prvParagraf = prvDiv.children[1];       //ne znam zosto ne mozam da go selektiram preku elementByClass "paragraph"

console.log (naslov.innerHTML);
console.log (prvParagraf.innerHTML);

naslov.innerHTML = "<b> IZMENET NASLOV </b>";
prvParagraf.innerHTML = "Ova e vezba. Na pocetok i ne bese taka lesno.";




let vtorParagraf = document.getElementsByClassName ("paragraph")[1];
let tekst = document.getElementsByTagName ("text")[0]; //ne bara vo zadacata

console.log(vtorParagraf.innerHTML);
console.log (tekst.innerHTML);

vtorParagraf.innerHTML = "Sega veke e polesno.";
tekst.innerHTML = "Se e okolu pravilno selektiranje na elementi";




let prvNaslovPosledenDiv = document.getElementsByTagName ("div")[2].firstElementChild;
let posledenNaslov = prvNaslovPosledenDiv.nextElementSibling;

console.log(prvNaslovPosledenDiv.innerHTML);
console.log(posledenNaslov.innerHTML);

prvNaslovPosledenDiv.innerHTML = "<b>Ova e premeneto</b>";
posledenNaslov.innerHTML = "<b>Isto taka i ova!</b>";



