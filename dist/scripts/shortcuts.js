function shortcut_settings() {
  console.log("shortcut_settings launched");
}

function shortcut_delete() {
  console.log("shortcut_delete launched");

  $("#delete-confirm")[0].style.display = "flex";
}

function shortcut_category() {
  console.log("shortcut_category launched");
}

$("#delete-confirm").click(function() {
  console.log("close function launched");

  $("#delete-confirm")[0].style.animationName = "fadeOut";
  $("#delete-confirm__box")[0].style.animationName = "bounceOut";

  setTimeout(function() {
    $("#delete-confirm")[0].style.display = "none";
    $("#delete-confirm")[0].style.animationName = "fadeIn";
    $("#delete-confirm__box")[0].style.animationName = "bounceIn";
  }, 1000);
});

$(".interactive__box_button").click(function() {
  console.log("close function launched");

  $("#delete-confirm")[0].style.animationName = "fadeOut";
  $("#delete-confirm__box")[0].style.animationName = "bounceOut";

  setTimeout(function() {
    $("#delete-confirm")[0].style.display = "none";
    $("#delete-confirm")[0].style.animationName = "fadeIn";
    $("#delete-confirm__box")[0].style.animationName = "bounceIn";
  }, 1000);
});