function countSheep(sheep) {
  let i = sheep;
  while (i > 0) {
    console.log(`${i}: Another sheep jumps over the fence`);
    i--;
  }
  console.log('All sheep jumped over the fence');
}

countSheep(5)