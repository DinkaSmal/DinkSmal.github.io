let moveInterval;
let moveBackInterval;

function moveObject() {
    let object = $('#object');
    object.css("left", parseInt(object.css("left")) + 1 + "px");
}

function moveObjectBack() {
    let object = $('#object');
    let currentLeft = parseInt(object.css("left"));
    if (currentLeft > 0) {
        object.css("left", currentLeft - 1 + "px");
    } else {
        clearInterval(moveBackInterval);
    }
}

$(document).ready(function() {
    $('#object').hover(
        function() {
            clearInterval(moveBackInterval);
            moveInterval = setInterval(moveObject, 10);
        }, 
        function() {
            clearInterval(moveInterval);
            moveBackInterval = setInterval(moveObjectBack, 10);
        }
    );
});
