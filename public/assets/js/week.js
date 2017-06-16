$(document).ready(function () {
  // displays date over each list on weekly page
  function displayDays() {
    $('#day-one-span').text(moment().isoWeekday(1).format('dddd, MMMM Do, YYYY'));
    $('#day-two-span').text(moment().isoWeekday(2).format('dddd, MMMM Do, YYYY'));
    $('#day-three-span').text(moment().isoWeekday(3).format('dddd, MMMM Do, YYYY'));
    $('#day-four-span').text(moment().isoWeekday(4).format('dddd, MMMM Do, YYYY'));
    $('#day-five-span').text(moment().isoWeekday(5).format('dddd, MMMM Do, YYYY'));
    $('#day-six-span').text(moment().isoWeekday(6).format('dddd, MMMM Do, YYYY'));
    $('#day-seven-span').text(moment().isoWeekday(7).format('dddd, MMMM Do, YYYY'));
  }

  // sets a data attribute to be used below
  function setDataDate() {
    $('#day-one-span').data('date', moment().isoWeekday(1).format('YYYY-MM-DD'));
    $('#day-two-span').data('date', moment().isoWeekday(2).format('YYYY-MM-DD'));
    $('#day-three-span').data('date', moment().isoWeekday(3).format('YYYY-MM-DD'));
    $('#day-four-span').data('date', moment().isoWeekday(4).format('YYYY-MM-DD'));
    $('#day-five-span').data('date', moment().isoWeekday(5).format('YYYY-MM-DD'));
    $('#day-six-span').data('date', moment().isoWeekday(6).format('YYYY-MM-DD'));
    $('#day-seven-span').data('date', moment().isoWeekday(7).format('YYYY-MM-DD'));
  }

  // uses data-date to determine path to view-date page
  $(document).on('click', '.date', function (event) {
    event.preventDefault();
    window.location = '/view-date/' + $(this).data('date');
  });
  displayDays();
  setDataDate();
});
