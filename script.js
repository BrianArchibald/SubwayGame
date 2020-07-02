function moveLeft() {
    let left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    left -= 100;
    character.style.left = left + "px";
}

function moveRight() {
    let right =
    parseInt(window.getComputedStyle(character).getPropertyValue("right"));

    right += 100;
    character.style.right = right + "px";
}

document.addEventListener('keydown', event => {
    if(event.key==='ArrowLeft') {moveLeft();}
    if(event.key==='ArrowRight') {moveRight();}
})