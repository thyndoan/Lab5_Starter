// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
//test isPhoneNumber function
// 2 valid phone numbers
test("isPhoneNumber valid: 123-456-7890", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test("isPhoneNumber valid: (123) 456-7890", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

// 2 invalid phone numbers
test("isPhoneNumber invalid: abcdefghij", () => {
  expect(isPhoneNumber("abcdefghij")).toBe(false);
});
test("isPhoneNumber invalid: abc-def-ghij", () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

//test isEmail function
// 2 valid emails
test("isEmail valid: test@gmail.com", () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});
test("isEmail valid: userName@domain.org", () => {
  expect(isEmail("userName@domain.org")).toBe(true);
});

// 2 invalid emails
test("isEmail invalid: testgmail.com", () => {
  expect(isEmail("testgmail.com")).toBe(false);
});
test("isEmail invalid: user@company", () => {
  expect(isEmail("user@company")).toBe(false);
});

//test isStrongPassword function
// 2 valid passwords
test("isStrongPassword valid: Abc123_", () => {
  expect(isStrongPassword("Abc123_")).toBe(true);
});
test("isStrongPassword valid: a1_b2C3", () => {
  expect(isStrongPassword("a1_b2C3")).toBe(true);
});
// 2 invalid passwords
test("isStrongPassword invalid: 1234abc", () => {
  expect(isStrongPassword("1234abc")).toBe(false);
});
test("isStrongPassword invalid: averylongpassword12345", () => {
  expect(isStrongPassword("averylongpassword12345")).toBe(false);
});

//test isDate function
// 2 valid dates
test("isDate valid: 1/1/2026", () => {
  expect(isDate("1/1/2026")).toBe(true);
});
test("isDate valid: 12/31/1999", () => {
  expect(isDate("12/31/1999")).toBe(true);
});
// 2 invalid dates
test("isDate invalid: 2020/1/12", () => {
  expect(isDate("2020/1/12")).toBe(false);
});
test("isDate invalid: 1-1-1998", () => {
  expect(isDate("1-1-1998")).toBe(false);
});

//test isHexColor function
// 2 valid hex colors
test("isHexColor valid: #FFF", () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test("isHexColor valid: #123456", () => {
  expect(isHexColor("#123456")).toBe(true);
});
// 2 invalid hex colors
test("isHexColor invalid: #GGG", () => {
  expect(isHexColor("#GGG")).toBe(false);
});
test("isHexColor invalid: 12345", () => {
  expect(isHexColor("12345")).toBe(false);
});
