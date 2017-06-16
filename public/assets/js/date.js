$(document).ready(function () {
  // sets current or selected date based on passed argument
  function showDate(date) {
    $('#date').html(moment(date).format('dddd, MMMM Do, YYYY'));
    $(function () {
      $('#datepicker').datepicker({
        dateFormat: 'yy-mm-dd'
      });
      $('#datepicker').datepicker('setDate', date);
    });
  }

  // displays different date based on whether home page or date-view is loaded
  function pickDate() {
    var date = $('#datepicker').data('date');
    if (date === '') {
      showDate(new Date());
    } else {
      showDate(date);
    }
  }

  pickDate();
});
