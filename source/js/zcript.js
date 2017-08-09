"use strict";

$(function () {
  var listDrop = $(".dr-menu__list--drop");
  var widthWindow = $(window).outerWidth(true);

  $("#set").click(function () {
    var count = $("#number").val();
    var columns = $("#columns").val();
    var width = $("#width").val();
    var words = $("#words").val();
    var style = $("#style").prop("checked");

    if (style) {
      listDrop.css({listStyleType: "decimal"});
    } else {
      listDrop.css({listStyleType: "none"});
    }
    if (count) {
      generateItems(listDrop, count, words);
    }
    if (width) {
      $(".dr-menu__item--drop").css({width: width});
    }
    if (columns) {
      setColumns(listDrop, columns);
    }
  });

  $(".dr-menu__item--main").mouseenter(function () {
    var listDropActive = listDrop.filter(function () {
      return $(this).css("backgroundRepeat") === "repeat";
    });
    listDropActive.css({left: 0});
    var leftPos = widthWindow - $(document).outerWidth(true);
    if (widthWindow - $(document).outerWidth(true) < 0) {
      listDropActive.css({left: leftPos});
    }
  });

  function generateItems(list, count, maxWords) {
    maxWords = maxWords || 3;
    var arrText = $(".control-menu__text").text().match(/\b\w+\b/g);
    list.each(function () {
      var randomCount = Math.round(Math.random() * 100);
      var elem = $(this).children().eq(1).children().text(arrText[randomCount]).end().siblings().remove().end();
      for (var i = 1; i < count; i++) {
        randomCount = Math.round(Math.random() * 100);
        var randomWords = Math.round(randomCount / (100 / maxWords));
        var text = arrText[randomCount] + " ";
        for (var t = 1; t < randomWords; t++) {
          randomCount = Math.round(Math.random() * 100);
          text += arrText[randomCount] + " ";
        }
        elem.clone().insertAfter(elem).children().text(text);
      }
    });
  }

  function setColumns(list, column) {
    var averageItemHeight = 0;
    var columnHeight = 0;
    list.each(function () {
      var allItemsHeight = 0;
      var items = $(this).children();
      items.each(function () {
        allItemsHeight += $(this).outerHeight(true);
      });
      averageItemHeight = allItemsHeight / items.length;
      columnHeight = Math.round(allItemsHeight / column);
      $(this).css({height: columnHeight + averageItemHeight});
    });
  }

});
