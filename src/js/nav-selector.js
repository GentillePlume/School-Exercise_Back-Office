console.log("nav-selector.js launched");

function nav_selector(pagename) {
  switch (pagename) {
    case "dashboard":
      $(".nav__menu--dashboard")[0].style.backgroundColor = "grey";
      break;
    case "articles":
      $(".nav__menu--articles")[0].style.backgroundColor = "grey";
      break;
    case "categories":
      $(".nav__menu--articles")[0].style.backgroundColor = "grey";
      break;
    default:
      alert("%cnav-selector ERROR", "background-color:red;color:white");
  }
}