$(document).ready(function () {
  function updateItem(event) {
    event.preventDefault();
    var data = {
      id: $(this).data('id'),
      item: $('#edit-text').val().trim(),
      setDate: $('#datepicker').val(),
      completed: $('#completed').val()
    };
    $.ajax({
      method: 'PUT',
      url: '/api/tasks',
      data: data,
      success: function () {
        document.location = '/';
      }
    });
  }

  $(document).on('click', '.update-item', updateItem);
});
