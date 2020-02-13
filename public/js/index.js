// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the header
let header = document.getElementsByClassName("head")[0];

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // if (window.pageYOffset > sticky) {
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// 点击菜单
document.querySelector(".head__menu-icon").addEventListener('click', function () {
    if (document.getElementById("head__menu--vertical").style.width == "" ||
        document.getElementById("head__menu--vertical").style.width == "0%") {
        document.getElementById("head__menu--vertical").style.width = "100%";
    } else {
        document.getElementById("head__menu--vertical").style.width = "0%";
    }
});

document.querySelectorAll(".head__menu--vertical span").forEach(element => element.addEventListener('click', function () {

    document.getElementById("head__menu--vertical").style.width = "0%";

}));


//自动hover的效果
let currentPage = window.location.href.split('/').pop();

document.querySelectorAll(".head__menu--horizontal li span, .head__menu--vertical li span").forEach(
    //一开始打开页面的时候保证当前页面hover
    (element) => {
      if (element.innerHTML.toUpperCase() == currentPage.toUpperCase() || (currentPage == "" && element.innerHTML == 'Home')) {
        element.classList.add("stay-hover");
      }
      element.addEventListener('click', function (event) {
        document.querySelectorAll(".head__menu--horizontal span, .head__menu--vertical span").forEach(
            (element) => {
              element.classList.remove("stay-hover");
            }
        );
        event.target.classList.add("stay-hover");
      });
    }
);

