$(document).ready(function () {
  function addItem(event) {
    event.preventDefault();

    var itemInput = $('#item-text').val().trim();

    if (!itemInput) {
      return;
    }

    $.post('/api/tasks', { item: itemInput });
  }

  $(document).on('click', '#add-item', addItem);
});
