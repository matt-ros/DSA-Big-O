function countSheep(sheep) {
  if (sheep === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${sheep}: Another sheep jumps over the fence`);
    countSheep(sheep - 1);
  }
}

// Linear time O(n).  One operation per sheep.

countSheep(5)