function compare(a: number, b: number): number {
  if (isNaN(a) && isNaN(b)) {
    return 0; // Consider NaNs equal
  } else if (isNaN(a)) {
    return 1; // Treat NaN as greater
  } else if (isNaN(b)) {
    return -1; // Treat NaN as smaller
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

let arr = [1, 2, 3, 4, 5, NaN];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5, NaN]

arr = [NaN, 5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5, NaN]