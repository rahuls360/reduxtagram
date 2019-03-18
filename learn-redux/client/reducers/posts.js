function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("likes increment");
    default:
      return state;
  }
  return state;
}

export default posts;
