$(document).ready(function () {
  function addItem(event) {
    event.preventDefault();

    var itemInput = $('#item-text').val().trim();
    var categoryInput = document.getElementById('category-select').value;

    if (!itemInput) {
      return;
    }

    $.post('/api/tasks', { 
      item: itemInput,
      category: categoryInput
    }).then(function () {
      location.reload();
    });

    console.log("category input: " + categoryInput);
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
      category = $(this).data('category');  
      complete = $(this).data('completed');
      icon = assignCategory('task', false); // will change parameters to 'category' and 'completed'
      console.log($(this).data);
      console.log(category); // currently logs undefined
      console.log(complete); // currently logs undefined
      console.log(icon);
      var iconListItem = $('<i>').addClass("fa-li fa");
      iconListItem.addClass(icon);
      $(this).append(iconListItem);
    });
  }

  selectIcon();
  $(document).on('click', '#add-item', addItem);
  $(document).on('click', '.destroy-item', destroyItem);
  $(document).on('click', '.edit-item', editItem);
});
