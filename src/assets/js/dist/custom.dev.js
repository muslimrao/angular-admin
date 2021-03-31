"use strict";

alert('fafa');

function openLeftNav() {
  $(document).ready(function () {
    $('.parentClass').each(function () {
      // $(".table-heading").text()
      $(this).find('li.li').each(function () {
        if ($(this).text().trim() === $('.table-heading').text().trim()) {
          $(this).parent()[0].click();
          var SI = setInterval(function () {
            if ($(".nav-link.collapsed:contains('" + $('.table-heading').text().trim() + "')").length > 0) {
              $(".nav-link.collapsed:contains('" + $('.table-heading').text().trim() + "')").addClass("active");
              clearInterval(SI);
            }
          }, 500);
        }
      });
    }); // console.log( $(".parentClass") );
  });
}