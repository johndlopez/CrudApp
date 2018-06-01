$(document).ready(function(){
  let storedData = JSON.parse(localStorage.getItem('myFormTextData')) || [];

  const populateList = () => {
    $('.existingList').html('');
    storedData.forEach(ele => {
      if (!ele) return;
      $('.existingList').append(`<li>${ele.title}</li>`)
    });
  };

  populateList();

  $('.submitForm').on('click', function() {
    let $textFieldValue = $('.textField').val();
    let $title = $('.codeTitle').val();
    $('.debug').text($textFieldValue);

    let obj = {
      title: $title,
      snippet: $textFieldValue
    };
    storedData.push(obj)
    console.log(storedData);
    let formattedData = JSON.stringify(storedData);
    localStorage.setItem('myFormTextData', formattedData);
    populateList();
  });

  $('.getData').on('click', function() {
    let retrieveData = localStorage.getItem('myFormTextData');
    $('.debug').text(retrieveData);
  })
});
