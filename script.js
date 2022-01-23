let imags = [
    src = "https://sun9-46.userapi.com/impg/QL2kaolbcQpHSUL2azsqWcdMfNGWhJrhYBT_aQ/uoFCTKgluLo.jpg?size=557x557&quality=96&sign=3b82ba5826fabbd1464811a98947c150&type=album",
    src = "https://sun9-58.userapi.com/impg/obE1Bu6OeTy-7IX5K3RK25V9UlfbuPm6XPEApw/TfM4XIXKZBQ.jpg?size=557x557&quality=96&sign=64564e5d1f7d7b6a67decfd00c19b294&type=album",
    src = "https://sun9-47.userapi.com/impg/J3umU7PUMRcPN2h04bxZD4eiTVMHELYHImKl-A/qd9_SB94LcI.jpg?size=557x557&quality=96&sign=200f558a2f4afae8574b97ecb0c4c22c&type=album",
    src = "https://sun9-46.userapi.com/impg/BPTJhER2Ncao4L9m99csgyFwWwSAWUF8igXF_Q/8I9IDRix7-M.jpg?size=557x557&quality=96&sign=74f0e24f13c542a69a12b7bdebc7d7f2&type=album",
    src = "https://sun9-87.userapi.com/impg/fp_DvrNXAXYKQ9Rxxkijdqy1Pf1aAlkIq0QfMQ/DYE_ZFaUvZk.jpg?size=1200x1200&quality=96&sign=7528bedcf08b5ca7b4c3acf3f1611119&type=album",
    src = "https://sun9-36.userapi.com/impg/cGgLAl2RduDMem5eA9zvbrtWk0tR0wQAQZvXoQ/nYV-SAn7W_Q.jpg?size=557x557&quality=96&sign=857c8565a752adf90ddc04968d33e40a&type=album"

]
let imags2 = [
    src = "https://sun9-46.userapi.com/impg/QL2kaolbcQpHSUL2azsqWcdMfNGWhJrhYBT_aQ/uoFCTKgluLo.jpg?size=557x557&quality=96&sign=3b82ba5826fabbd1464811a98947c150&type=album",
    src = "https://sun9-58.userapi.com/impg/obE1Bu6OeTy-7IX5K3RK25V9UlfbuPm6XPEApw/TfM4XIXKZBQ.jpg?size=557x557&quality=96&sign=64564e5d1f7d7b6a67decfd00c19b294&type=album",
    src = "https://sun9-47.userapi.com/impg/J3umU7PUMRcPN2h04bxZD4eiTVMHELYHImKl-A/qd9_SB94LcI.jpg?size=557x557&quality=96&sign=200f558a2f4afae8574b97ecb0c4c22c&type=album",
    src = "https://sun9-46.userapi.com/impg/BPTJhER2Ncao4L9m99csgyFwWwSAWUF8igXF_Q/8I9IDRix7-M.jpg?size=557x557&quality=96&sign=74f0e24f13c542a69a12b7bdebc7d7f2&type=album",
    src = "https://sun9-87.userapi.com/impg/fp_DvrNXAXYKQ9Rxxkijdqy1Pf1aAlkIq0QfMQ/DYE_ZFaUvZk.jpg?size=1200x1200&quality=96&sign=7528bedcf08b5ca7b4c3acf3f1611119&type=album",
    src = "https://sun9-36.userapi.com/impg/cGgLAl2RduDMem5eA9zvbrtWk0tR0wQAQZvXoQ/nYV-SAn7W_Q.jpg?size=557x557&quality=96&sign=857c8565a752adf90ddc04968d33e40a&type=album"
]
let btn = document.querySelector('.button');
let dialog = document.querySelector('dialog');


function list() {
    image.src = imags[Math.floor(Math.random() * imags.length)];
    image2.src = imags2[Math.floor(Math.random() * imags2.length)];
}

function start() {


    count = 0;
    btn.style.display = 'none';

    intervalId = setInterval(function () {
        count++;
        if (count == 30) {
            clearInterval(intervalId);
            btn.style.display = '';
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
btn.addEventListener('click', start);


function a() {
    document.querySelector(".button").classList.add('active');
}
document.querySelector('.button').onmouseenter = a;
function b() {
    document.querySelector('.button').classList.remove('active');
}
document.querySelector('.button').onmouseleave = b;


