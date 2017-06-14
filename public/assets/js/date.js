$(document).ready(function() {
  function showDate() {
  	$("#date").text(new Date().toDateString());
  }
  showDate();
  $(function() {
    $("#datepicker").datepicker();
  });
});