function hasTargetSum(array, target) {
  // Write your algorithm here:
  const seenNumbers = new Set(); //Initialize a empty Set.
  /*
  Set objects are collections of values. You can iterate through the elements of a set in 
  insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
  */

  for(const number of array){
    const complement = target - number;
    if(seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}

  //Big O time complexity of function: O(n).
/* 
  Pseudocode:
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    iterate over the remaining numbers in the array
      check if any of the remaining numbers is the complement
        if so, return true
  if we reach the end of the array, return false*/

/*
  Written explanation of solution:
  This solution is far more optimized when compared to my original solution, with a 
  Time Complexity of O(n), which is linear.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");
  console.log("");

  console.log("Expecting: false:");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
