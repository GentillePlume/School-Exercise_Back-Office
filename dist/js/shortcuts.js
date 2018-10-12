function shortcut_articles_edit() {
  console.log("shortcut-settings launched");

  $("#shortcut-settings")[0].style.display = "flex";
}

function shortcut_tags_edit() {
  console.log("shortcut-settings launched");

  $("#shortcut-tags_edit")[0].style.display = "flex";
}

function shortcut_delete() {
  console.log("shortcut-delete launched");

  $("#shortcut_delete")[0].style.display = "flex";
}

function shortcut_articles_tags() {
  console.log("shortcut-category launched");

  $("#shortcut-articles_tags")[0].style.display = "flex";
}

$(".button__add_sub--article").click(function() {
  shortcut_articles_new();
});

$(".button__add_sub--tag").click(function() {
  shortcut_tags_new();
});

function shortcut_articles_new() {
  console.log("new article form opened");
  $("#shortcut-new-article")[0].style.display = "flex";
}

function shortcut_tags_new() {
  console.log("new tag form opened");
  $("#shortcut-tags_new")[0].style.display = "flex";
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