import { isPalindrome } from "../src/palindromeCheck";

test("palindrome tests", () => {
  expect(isPalindrome("aba")).toBe(true);
  expect(isPalindrome("abba")).toBe(true);
  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome("aa")).toBe(true);
  expect(isPalindrome("a")).toBe(true);
  expect(isPalindrome("ab")).toBe(false);
});
