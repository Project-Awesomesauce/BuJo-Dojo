$(document).ready(function () {
  function addItem(event) {
    event.preventDefault();

    var itemInput = $('#item-text').val().trim();
    var categoryInput = document.getElementById('category-select').value;

    var dateInput = $("#datepicker").datepicker("getDate");
    console.log(dateInput);

    if (!itemInput) {
      return;
    }

    $.post('/api/tasks', { 
      item: itemInput,
      category: categoryInput
      //setDate: dateInput
    }).then(function () {
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
    var completed;
    var icon;
    $('li').each(function () {
      category = $(this).attr('data-category');  
      completed = $(this).attr('data-completed');
      icon = assignCategory(category, JSON.parse(completed));
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
