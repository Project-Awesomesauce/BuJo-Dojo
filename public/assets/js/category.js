function assignCategory(category, complete) {
  switch(category | complete) {
  	case "task" | "false":
  	  // Will eventually change the return values to actual font-awesome icon names
  	  return "bullet"; 
  	  break;
    case "event" | "false":
      return "circle";
      break;
	case "note" | "false":
	  return "dash";
	  break;
	case "task" | "true":
	  return "bullet-crossed";
	  break;
	case "event" | "true":
	  return "circle-crossed";
	  break;
	case "note" | "true":
	  return "dash-crossed";
	  break;
  }
}