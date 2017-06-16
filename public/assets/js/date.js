$(document).ready(function() {
  function showDate() {
  	$("#date").html(moment().format("dddd, MMMM Do, YYYY"));
  }
  showDate();
  $(function() {
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
    });
    $("#datepicker").datepicker("setDate", new Date());
  });
});