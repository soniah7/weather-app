// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
/// 注意这里不要与别的component的css弄混！！
let header = document.getElementsByClassName("head")[0];

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  // if (window.pageYOffset > sticky) {
  if (window.pageYOffset > 0) { ///和>sticky的区别在哪？？？
  header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// 点击菜单
document.querySelector(".head__menu-icon").addEventListener('click', function () {
  // document.getElementById("head__menu--vertical").classList.toggle("head__menu--vertical");
  //这里不能用toggle实现菜单从右往左滑出来的效果，见：https://stackoverflow.com/questions/55821545/how-to-add-transition-effects-to-javascript-toggle-menu
  //和 https://stackoverflow.com/questions/50874992/transition-effect-on-toggle-jquery
  if (document.getElementById("head__menu--vertical").style.width == "" ||
    document.getElementById("head__menu--vertical").style.width== "0%") {//"0px") {
    document.getElementById("head__menu--vertical").style.width = "100%";
  } else {
    document.getElementById("head__menu--vertical").style.width = "0%";
  }
});

document.querySelectorAll(".head__menu--vertical a").forEach(element => element.addEventListener('click', function () {

    document.getElementById("head__menu--vertical").style.width = "0%";

}));


//如果在header是sticky的情况下刷新页面，刷新后sticky的效果会消失


// 下面的工作都可以放在tweet组件里面！！！！！
// // ====== twitter section ======
// // document.getElementsByClassName("tweet").forEach(element => { //这个返回的是htmlcollection，不能用foreach！！！？？？？为什么？？？
// document.querySelectorAll(".tweet").forEach(element => {
//     console.log('element is'+ element);
//       if (element.scrollHeight <= element.offsetHeight) {
//         document.querySelector(".angle-down").style.visibility="hidden";
//       }
//     }
// );
//
