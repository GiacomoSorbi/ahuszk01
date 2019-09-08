$(document).ready(function () {

// Hide sidebar
$('#sidebarHide').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });

    // Show sidebar
$('#sidebarShow').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });


});