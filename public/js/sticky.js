function stickyMenu() {
    var sticky = document.getElementById("sticky");
    if (window.pageYOffset > 20) {
        sticky.classList.add("sticky");
        sticky.classList.remove("menu-ul");
    }
    else {
        sticky.classList.remove("sticky");
    }
}
window.onscroll = function () {
    stickyMenu();
}