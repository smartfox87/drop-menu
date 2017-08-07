"use strict";

$("#set").click(function () {
  var count = $("#number").val();
  var columns = $("#columns").val();
  var width = $("#width").val();
  if (count) {
    cloneItem($(".drop-menu__item--second"), count);
  }
  if (width) {
    $(".drop-menu__list--second").css({columnWidth: width + "px"});
  }
  if (columns) {
    $(".drop-menu__list--second").css({columnCount: columns});
    setColumn($(".drop-menu__list--second"), columns);
  }
});

filterKey($(".control-menu"));

function filterKey(elem) {
  $(elem).keypress(function (event) {
    if (!/\d/.test(String.fromCharCode(event.charCode))) {
      event.preventDefault();
    }
  })
}

function cloneItem(item, count) {
  var elem = item.filter(":first-child").nextAll().remove().end();
  for (var i = 1; i < count; i++) {
    elem.eq(0).clone().insertAfter(elem);
  }
}


function setColumn(list, column) {
  var items = list.children().children();
  items.each(function (ind, elem) {
    console.log($(this).outerHeight());
    // console.log($(this));
  });
}

