(function() {
  'use strict';

window.github = window.github || {};

var something = function addOneItemToUL(item) {
   //add one item to the UL
  var list= document.createElement('li');

  var Img = document.createElement('img');

  list.appendChild(Img);

  var p = document.createElement('p');
  list.appendChild(p);

  document.querySelector('ul').appendChild(list);

 }


  window.github.addOneItemToUL = something;
}());
