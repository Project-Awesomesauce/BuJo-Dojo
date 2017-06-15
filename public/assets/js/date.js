$(document).ready(function() {
  function showDate() {
  	$("#date").html(new Date());
  }
  showDate();
  $(function() {
    $("#datepicker").datepicker({
    	dateFormat: "yy-mm-dd"
    });
  });
});