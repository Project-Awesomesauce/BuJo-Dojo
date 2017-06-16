$(document).ready(function () {
  // updates db with changed values
  function updateItem(event) {
    event.preventDefault();

    var date = $('#datepicker').val();

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
        var url = '../view-date/' + date;
        document.location = url;
      }
    });
  }

  $(document).on('click', '.update-item', updateItem);
});
