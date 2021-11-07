function decToBin(value) {
  return (value >>> 0).toString(2);
}

function valueIn(value, array) {
  for (const compare of array) {
    if (compare == value) {
      return true;
    }

    if (value instanceof Minterm) {
      if (compare.equals(value)) {
        return true;
      }
    }
  }
  return false;
}
