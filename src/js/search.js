$(".main-articles__header_filters_container input[type=checkbox]").on('change', function() {
  var self = $(this);
  if (self.is(":checked")) {
    // console.log(self.attr("id") + " is checked ");
    filters_loader();
  } else {
    // console.log(self.attr("id") + " is Unchecked ");
    filters_loader();
  }
});

for (i = 0; i < $(".main__header_filters_select").length; i++) {
  $(".main__header_filters_select")[i].onchange = function() {
    filters_loader();
  };
}

$(".main__header_filters_input").keypress(function() {
  filters_loader();
});
$(".main__header_filters_input").keydown(function() {
  filters_loader();
});
$(".main__header_filters_input").keyup(function() {
  filters_loader();
});

function filters_loader() {
  $(".main__header_filters_container_loader")[0].style.opacity = 1;
  setTimeout(function() {
    $(".main__header_filters_container_loader")[0].style.opacity = 0;
  }, 1500);
}