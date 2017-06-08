$(document).ready(function () {
  function updateItem(event) {
    event.preventDefault();
    var data = {
      id: $(this).data('id'),
      item: $(this).prev().prev().val()
        .trim(),
      completed: $(this).prev().val()
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
