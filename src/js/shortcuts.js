function shortcut_settings() {
  console.log("shortcut-settings launched");

  $("#shortcut-settings")[0].style.display = "flex";
}

function shortcut_delete() {
  console.log("shortcut-delete launched");

  $("#shortcut-delete")[0].style.display = "flex";
}

function shortcut_category() {
  console.log("shortcut-category launched");
}

$("#quickcontrol-article").click(function() {
  shortcut_new_article();
});

function shortcut_new_article() {
  console.log("new article form opened");
  $("#shortcut-new-article")[0].style.display = "flex";
}

$(".interactive-popup__box_button").click(function() {
  console.log("close function launched by click out the box");

  for (i = 0; i < $(".interactive-popup").length; i++) {
    console.log("OUT ANIMATION = " + i);
    $(".interactive-popup")[i].style.animationName = "fadeOut";
    $(".interactive-popup__box")[i].style.animationName = "bounceOut";
  }

  setTimeout(function() {

    for (i = 0; i < $(".interactive-popup").length; i++) {
      console.log("i = " + i);

      $(".interactive-popup")[i].style.display = "none";
      $(".interactive-popup")[i].style.animationName = "fadeIn";
      $(".interactive-popup__box")[i].style.animationName = "jackInTheBox";
    }
  }, 1000);
});