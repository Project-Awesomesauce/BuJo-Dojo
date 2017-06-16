$(document).ready(function () {
  function updateItem(event) {
    event.preventDefault();
    var date = $('#datepicker').val();
    // if (date === '') {
    //   date = moment($('#datepicker').attr('date')).format('yyyy-mm-dd');
    // }
    console.log('edit date' + date);
    var data = {
      id: $(this).data('id'),
      item: $('#edit-text').val().trim(),
      setDate: date,
      completed: $('#completed').val()
    };
    $.ajax({
      method: 'PUT',
      url: '/api/tasks',
      data: data,
      success: function () {
        document.location = '/view-today';
      }
    });
  }

  $(document).on('click', '.update-item', updateItem);
});
