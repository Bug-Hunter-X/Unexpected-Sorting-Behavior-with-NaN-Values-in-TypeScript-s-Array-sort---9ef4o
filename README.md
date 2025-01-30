# Unexpected Sorting Behavior with NaN Values in TypeScript's Array.sort()

This example demonstrates a subtle bug related to TypeScript's `Array.sort()` method and how it interacts with `NaN` values.  The `compare` function appears to be correctly implemented, but it fails to handle the case of `NaN` appropriately, leading to unpredictable sorting behavior. 

The problem highlights a common pitfall when working with sorting functions in JavaScript and TypeScript: the need for explicit handling of special values like `NaN`.  The solution demonstrates how to properly handle `NaN` to ensure reliable sorting results.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file. Observe the unexpected sorting order when `NaN` is present.
3. Examine `bugSolution.ts` for the corrected comparison function.

## Solution

The `bugSolution.ts` file provides a corrected version of the `compare` function that correctly handles `NaN` values, ensuring a consistent and predictable sort order.