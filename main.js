let notifyBtn = document.querySelector('.notification__btn-style');
let notificationFrame = document.querySelector('.notification');

console.log(notificationFrame)

notifyBtn.onclick = function() {
    notificationFrame.style.display = 'none';
}