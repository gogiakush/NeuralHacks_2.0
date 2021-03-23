/* document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.arrow').forEach((arr, index) => {
            arr.addEventListener('click', () => {
                arr.classList.toggle('act-arrow');
                document.querySelector('#text' + (index+1)).classList.toggle('active');
        })
    })
}) */

$(document).ready(function() {
  $(".dropdown-title").each(function() {
    $(this).click(function() {
      $(this).toggleClass("act-arrow");
      var content = $(this).next();
      content.slideToggle(500, function() {
        //execute this after slideToggle is done
      });
    });
  });
});