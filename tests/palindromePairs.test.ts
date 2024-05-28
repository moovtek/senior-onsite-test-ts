import { palindromePairs } from "../src/palindromePairs";

function sortPairs(pairs: number[][]): number[][] {
  return pairs
    .map((pair) => pair.slice().sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0]);
}

test("palindrome pairs tests", () => {
  expect(sortPairs(palindromePairs(["bat", "tab", "cat"]))).toEqual(
    sortPairs([
      [0, 1],
      [1, 0],
    ])
  );
  expect(sortPairs(palindromePairs(["a", ""]))).toEqual(
    sortPairs([
      [0, 1],
      [1, 0],
    ])
  );
});
