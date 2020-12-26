function resolver_tower_of_hanoi(s, d, e, n) {

  // terminating condition
  if (n <= 0) {
    return
  }

  resolver_tower_of_hanoi(s, e, d, n - 1)

  console.log(`Move Disk-${n} FROM ${s} TO ${d}`);

  resolver_tower_of_hanoi(e, d, s, n - 1);
}

// With 5 disks after 7 calls --> source = [4,5], destination = [1,2,3], extra = []
// With 3 disks --> 7 moves to solve
// With 4 disks --> 15 moves to solve
// With 5 disks --> 31 moves to solve
// Time complexity exponential time O(2^n)

resolver_tower_of_hanoi('source', 'destination', 'extra', 5)