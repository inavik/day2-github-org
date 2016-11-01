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
    .done(function handleSuccess(data){
      // var items = [];
      //
      // $.each(data, function addOneItemToUL(each) {
      //
      // })


      // data.forEach(function addOneItemToUL(each) {
      //   window.github.addOneItemToUL();
      //   console.log(each);
      // })

    })
    .fail(function handleErrors(xhr){
      console.log(xhr);
    });

  });






}());
