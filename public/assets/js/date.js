$(document).ready(function() {
  function showDate() {
  	$("#date").text("Date to be shown here");
  }
  showDate();
  $(function() {
    $("#datepicker").datepicker({
    	dateFormat: "yy-mm-dd"
    });
  });
});