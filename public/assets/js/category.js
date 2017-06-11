function assignCategory(category, complete) {
  switch(category | complete) {
  	case "task" | false:
  	  return "fa-square-o"; 
  	  break;
    case "event" | false:
      return "fa-circle-o";
      break;
	case "note" | false:
	  return "fa-star-o";
	  break;
	case "task" | true:
	  return "fa-check-square";
	  break;
	case "event" | true:
	  return "fa-check-circle";
	  break;
	case "note" | true:
	  return "fa-star";
	  break;
  }
}
