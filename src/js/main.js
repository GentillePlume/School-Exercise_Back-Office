console.log("main.js launched");

/*
##################################################
                    ADD BUTTON
##################################################
*/

var button__add_sub = $(".button__add_sub");
var button__add_main = $(".button__add--main");
var button__add_icon_main = $(".button__add_icon--cross");
var button_lever = false;

button__add_main.click(function() {

  if (button_lever == false) {

    button__add_sub[0].style.display = "flex";
    button__add_sub[1].style.display = "flex";

    button__add_icon_main[0].style.transform = "rotate(0deg)";
    button__add_main[0].style.backgroundColor = "red";

    button__add_sub[0].style.animationName = "none";
    button__add_sub[1].style.animationName = "none";

    button__add_sub[0].style.animationName = "fadeInRight";
    button__add_sub[1].style.animationName = "fadeInRight";


    // button__add_sub[0].style.width = "75px";
    // button__add_sub[0].style.height = "75px";
    // button__add_sub[0].style.opacity = "1";
    button__add_sub[0].style.pointerEvents = "all";


    // button__add_sub[1].style.width = "75px";
    // button__add_sub[1].style.height = "75px";
    // button__add_sub[1].style.opacity = "1";
    button__add_sub[1].style.pointerEvents = "all";

    button_lever = true;


  } else if (button_lever == true) {

    button__add_icon_main[0].style.transform = "rotate(-45deg)";
    button__add_main[0].style.backgroundColor = "green";

    button__add_sub[0].style.animationName = "none";
    button__add_sub[1].style.animationName = "none";

    button__add_sub[0].style.animationName = "fadeOutRight";
    button__add_sub[1].style.animationName = "fadeOutRight";

    // button__add_sub[0].style.width = "0px";
    // button__add_sub[0].style.height = "0px";
    // button__add_sub[0].style.opacity = "0";
    button__add_sub[0].style.pointerEvents = "none";

    // button__add_sub[1].style.width = "0px";
    // button__add_sub[1].style.height = "0px";
    // button__add_sub[1].style.opacity = "0";
    button__add_sub[1].style.pointerEvents = "none";

    // setTimeout(function() {
    // setTimeout(function() {
    //   button__add_sub[0].style.display = "none";
    //   button__add_sub[1].style.display = "none";
    // }, 1000)


    button_lever = false;

  } else {
    console.log("%cFATAL ERROR BURN DOWN SYSTEM FAIL AUTO DESTRUCTION", "color:red");
  }
})

$(".button__add_sub--articles").mouseenter(function() {
  $(".quickcontrols__menu_overlay--articles")[0].style.width = $(".quickcontrols__menu_name--articles").width() + $(".button__add_sub").width() + "px";
  $(".quickcontrols__menu_name--articles")[0].style.display = "inline-block";
})
$(".button__add_sub--articles").mouseleave(function() {
  $(".quickcontrols__menu_overlay--articles")[0].style.width = "0%";
  $(".quickcontrols__menu_name--articles")[0].style.display = "none";
})
$(".button__add_sub--tag").mouseenter(function() {
  $(".quickcontrols__menu_overlay--tag")[0].style.width = $(".quickcontrols__menu_name--tag").width() + $(".button__add_sub").width() + "px";
  $(".quickcontrols__menu_name--tag")[0].style.display = "inline-block";
})
$(".button__add_sub--tag").mouseleave(function() {
  $(".quickcontrols__menu_overlay--tag")[0].style.width = "0%";
  $(".quickcontrols__menu_name--tag")[0].style.display = "none";
})