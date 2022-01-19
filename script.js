let imags = [
    src = "img/dice1.png",
    src = "img/dice2.png",
    src = "img/dice3.png",
    src = "img/dice4.png",
    src = "img/dice5.png",
    src = "img/dice6.png"

]
let imags2 = [
    src = "img/dice1.png",
    src = "img/dice2.png",
    src = "img/dice3.png",
    src = "img/dice4.png",
    src = "img/dice5.png",
    src = "img/dice6.png"
]



image = document.getElementById("image");
image2 = document.getElementById("image2");

button = document.getElementById("button");


function list() {
    image.src = imags[Math.floor(Math.random() * imags.length)];
    image2.src = imags2[Math.floor(Math.random() * imags2.length)];


}

function start() {

    let dialog = document.querySelector('dialog');

    count = 0;

    intervalId = setInterval(function () {
        count++;
        if (count == 30) {
            clearInterval(intervalId);
        }
        list();
        if (count == 30 && image.src === image2.src) {
            showMessage();
        }
    }, 100);

    function showMessage() {
        dialog.showModal();
    }
    document.querySelector('#buttonClose').onclick = function () {
        dialog.close();
    }

}
document.querySelector('.button').addEventListener('click', start);


function a() {
    document.querySelector(".button").classList.add('active');
}
document.querySelector('.button').onmouseenter = a;
function b() {
    document.querySelector('.button').classList.remove('active');
}
document.querySelector('.button').onmouseleave = b;


