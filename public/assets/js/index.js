$(document).ready(function () {
  function addItem(event) {
    event.preventDefault();

    var itemInput = $('#item-text').val().trim();

    if (!itemInput) {
      return;
    }

    $.post('/api/tasks', { item: itemInput }).then(function () {
      location.reload();
    });
  }

  function destroyItem(event) {
    event.preventDefault();
    var id = $(this).data('id');

    $.ajax({
      method: 'DELETE',
      url: '/api/tasks/' + id
    }).done(function () {
      location.reload();
    });
  }

  function editItem(event) {
    event.preventDefault();
    document.location = '/edit/' + $(this).data('id');
  }

  function selectIcon() {
    var category;
    var complete;
    var icon;
    $('li').each(function () {
      category = $(this).next().data('category');
      complete = $(this).next().data('completed');
      icon = assignCategory(category, complete);
      $(this).next().next().addClass(icon);
    });
  }

  selectIcon();
  $(document).on('click', '#add-item', addItem);
  $(document).on('click', '.destroy-item', destroyItem);
  $(document).on('click', '.edit-item', editItem);
});
