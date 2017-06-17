$(document).ready(function () {
  // adds new item to db
  function addItem(event) {
    event.preventDefault();

    var itemInput = $('#item-text').val().trim();
    var categoryInput = document.getElementById('category-select').value;

    var dateInput = $('#datepicker').val();

    if (!itemInput) {
      return;
    }

    $.post('/api/tasks', {
      item: itemInput,
      category: categoryInput,
      setDate: dateInput
    }).then(function () {
      location.reload();
    });
  }

  // deletes item from db based on id
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

  // routes to edit item page based on item id
  function editItem(event) {
    event.preventDefault();
    document.location = '/edit/' + $(this).data('id');
  }

  // selects icon based on category chosen
  function selectIcon() {
    var category;
    var completed;
    var icon;
    $('li').each(function () {
      category = $(this).attr('data-category');
      completed = $(this).attr('data-completed');
      if (completed === undefined) {
        completed = false;
      }
      icon = assignCategory(category, JSON.parse(completed));
      var iconListItem = $('<i>').addClass('fa-li fa');
      iconListItem.addClass(icon);
      $(this).append(iconListItem);
    });
  }

  function setActive() {
    var page = window.location.pathname;
    switch (page) {
      case '/':
        $('#nav-home').addClass('active');
        break;
      case '/view-today':
        $('#nav-today').addClass('active');
        break;
      case '/view-week':
        $('#nav-week').addClass('active');
        break;
      case '/contact':
        $('#nav-contact').addClass('active');
        break;
      default:
        $('#navbar a').removeClass();
    }
  }


  selectIcon();
  setActive();
  $(document).on('click', '#add-item', addItem);
  $(document).on('click', '.destroy-item', destroyItem);
  $(document).on('click', '.edit-item', editItem);
});
