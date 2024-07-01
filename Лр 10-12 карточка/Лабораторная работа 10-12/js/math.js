function mathInputChange(e) {
    document.getElementById("mathOutput").textContent = calc(e.target.value)
}

function calc(x) {
    var step1 = Math.pow(x, x) + 3 * x + 4;
     if (step1 == 0) {
        alert("Деление на 0!");
        return "y = null";
    }
    else return "y = " + (3 - x) / step1;
}