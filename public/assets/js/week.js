$(document).ready(function () {
  function displayDays() {
    $('#day-one-span').text(moment().isoWeekday(1).format('dddd, MMMM Do, YYYY'));
    $('#day-two-span').text(moment().isoWeekday(2).format('dddd, MMMM Do, YYYY'));
    $('#day-three-span').text(moment().isoWeekday(3).format('dddd, MMMM Do, YYYY'));
    $('#day-four-span').text(moment().isoWeekday(4).format('dddd, MMMM Do, YYYY'));
    $('#day-five-span').text(moment().isoWeekday(5).format('dddd, MMMM Do, YYYY'));
    $('#day-six-span').text(moment().isoWeekday(6).format('dddd, MMMM Do, YYYY'));
    $('#day-seven-span').text(moment().isoWeekday(7).format('dddd, MMMM Do, YYYY'));
  }
  function setDataDate() {
    var date;
    for (var i = 1; i <= 7; i += 1) {
      date = moment().isoWeekday(i).format('YYYY-MM-DD');
      switch (i) {
        case 1:
          $('#day-one-span').data('date', date);
          break;
        case 2:
          $('#day-two-span').data('date', date);
          break;
        case 3:
          $('#day-three-span').data('date', date);
          break;
        case 4:
          $('#day-four-span').data('date', date);
          break;
        case 5:
          $('#day-five-span').data('date', date);
          break;
        case 6:
          $('#day-six-span').data('date', date);
          break;
        case 7:
          $('#day-seven-span').data('date', date);
          break;
      }
    }
  }

  $(document).on('click', '.date', function (event) {
    event.preventDefault();
    window.location = '/view-date/' + $(this).data('date');
  });
  displayDays();
  setDataDate();
});
