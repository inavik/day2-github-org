(function() {
  'use strict';

  window.github = window.github || {};

  var something = function addOneItemToUL(item) {
  var list= document.createElement('li');
  $('<img />',
                {
                  src: item.avatar_url
                })
                .appendTo(list)
  $('<p>',
              {
                text: item.login
              })
              .appendTo(list)

    document.querySelector('ul').appendChild(list);
   }


    window.github.addOneItemToUL = something;

}());
