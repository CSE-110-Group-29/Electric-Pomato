const foo = require("../js/foo");

test("Adds 2 + 2 to equal 4", () => {
  expect(foo.add(2, 2)).toBe(4);
});

