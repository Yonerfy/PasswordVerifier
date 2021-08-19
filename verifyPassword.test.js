const verifyPassword = require("./verifyPassword");

test("Password is korter dan 9 karakters", () => {
  expect(verifyPassword.hasRightLength("kara")).toBe(true);
});

test("Password is niet null", () => {
  expect(verifyPassword.isNotNull("null")).toBe(false);
});

test("Password heeft 1 of meer uppercase karakters", () => {
  expect(verifyPassword.hasUpperCaseCharacter("ulL")).toBe(true);
});

test("Password heeft 1 of meer lowercase karakters", () => {
  expect(verifyPassword.hasLowerCaseCharacter("nULL")).toBe(true);
});

test("Password heeft 1 of meer cijfers", () => {
  expect(verifyPassword.hasDigit("n8ULL")).toBe(true);
});

test("tenminste 3 condities true zijn", () => {
  expect(
    verifyPassword.minimumConditionsReached([true, true, true, false, false])
  ).toBe(true);
});

test("condities 4 true is", () => {
  expect(verifyPassword.verifyPassword("NULL1b")).toBe(true);
});
