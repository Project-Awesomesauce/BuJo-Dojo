$(document).ready(function () {
  function displayDays() {
    $("#day-one-span").text(moment().isoWeekday(1).format("dddd, MMMM Do, YYYY"));
    $("#day-two-span").text(moment().isoWeekday(2).format("dddd, MMMM Do, YYYY"));
    $("#day-three-span").text(moment().isoWeekday(3).format("dddd, MMMM Do, YYYY"));
    $("#day-four-span").text(moment().isoWeekday(4).format("dddd, MMMM Do, YYYY"));
    $("#day-five-span").text(moment().isoWeekday(5).format("dddd, MMMM Do, YYYY"));
    $("#day-six-span").text(moment().isoWeekday(6).format("dddd, MMMM Do, YYYY"));
    $("#day-seven-span").text(moment().isoWeekday(7).format("dddd, MMMM Do, YYYY"));
  }
  displayDays();
});