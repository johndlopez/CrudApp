$(document).ready(function(){
  // $('body').html('<p>HW</p>');
  $('.submitForm').on('click', function() {
    let $textFieldValue = $('.textField').val();
    $('.debug').text($textFieldValue);

    localStorage.setItem('myFormTextData', $textFieldValue);
  });


  $('.textField').on('keyup', function () {
    let textFieldValue = $('.textField').val();
    $('.debug').text(textFieldValue);
  })
});