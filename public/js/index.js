// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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
    document.getElementById("head__menu--vertical").style.width== "0%") {
    document.getElementById("head__menu--vertical").style.width = "100%";
  } else {
    document.getElementById("head__menu--vertical").style.width = "0%";
  }
});

document.querySelectorAll(".head__menu--vertical a").forEach(element => element.addEventListener('click', function () {

    document.getElementById("head__menu--vertical").style.width = "0%";

}));

//如果在header是sticky的情况下刷新页面，刷新后sticky的效果会消失

