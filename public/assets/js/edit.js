$(document).ready(function () {
  function updateItem(event) {
    event.preventDefault();
    var data = {
      id: $(this).data('id'),
      item: $(this).prev().val().trim()
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
