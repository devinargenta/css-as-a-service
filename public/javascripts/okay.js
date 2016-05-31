'use strict';

$(document).ready( () => {

  $.getJSON( '/create/background/tomato', (res) => {
    $('body').css(res);
  });

  $.getJSON('/create/color/white', (res) => {
    $('body').css(res);
  });

});
