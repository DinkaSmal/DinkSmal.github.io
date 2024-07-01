var  S1 = "Смаль";
var S2 = "Богушевича 52";
var isChange = false;

child1 = createElement("p", "S1: " + S1);
document.body.appendChild(child1);

child2 = createElement("p", "S2: " + S2);
document.body.appendChild(child2);

function changeStr() {
   if (!isChange)
    {
        document.body.appendChild(createElement("p", "Длина строки S1 = " + S1.length));
        document.body.appendChild(createElement("p", "S1 + S2 = " + S1 + " " + S2));
        document.body.appendChild(createElement("p", "S2 вверхнем регистре = " + S2.toUpperCase()));
        isChange = true;
    }
}