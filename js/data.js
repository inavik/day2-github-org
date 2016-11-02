(function() {
  'use strict';

window.github = window.github || {};

$('button')
  .on('click', function load(event) {
    var token= $('input').val();
      $.ajax({
        url: 'https://api.github.com/users/jisaacks/orgs',
        method: 'GET',
        dataType: 'json',
        headers: {
          Authorization: 'token ' + token
        }
      })
    .done(function handleSuccess(data) {
      data.forEach(function addOneItemToUL(each) {
        window.github.addOneItemToUL(each);
      })
    })
    .fail(function handleErrors(xhr, errorType){
      if (xhr.status === 404) {
        $('body').append('<p>Sorry, cannot find that file!</p>');
      } else if (xhr.status === 500) {
        $('body').append('<p>Sorry, the server is down!</p>');
      }
      console.log(xhr, errorType);
    });


});






}());
