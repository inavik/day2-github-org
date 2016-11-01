(function() {
  'use strict';

window.github = window.github || {};

var something = function addOneItemToUL(item) {
   //add one item to the UL
  //  console.log(item.id)
  var list= document.createElement('li');
  // <li> list.avatar_url </li>
  // var img = document.createElement('img')
  // img.src(list.avatar_url);

  var img = $('<img />',
              {
                src: item.avatar_url
              })
              .appendTo(list)

  var p = $('<p>',
            {
              text: item.login
            })
            .appendTo(list)

  document.querySelector('ul').appendChild(list);

 }


  window.github.addOneItemToUL = something;
}());
