import { assert, describe, test } from "vitest";

describe("foo test", () => {
  test("test 1", () => {
    const foo = "a";
    assert.equal("a", foo);
  });
});
