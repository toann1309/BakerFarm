let navRight = document.querySelector('.nav__right');

let navIcon = document.querySelector('.nav__icon-box');

let navStyle = navRight.clientHeight;

navIcon.onclick = function() {
    let isClose = navRight.clientHeight === navStyle;
    if(isClose) {
        navRight.style.display = 'block';
    }
    else {
        navRight.style.display = 'none';
    }
}