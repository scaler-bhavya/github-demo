const helloWorld = require("../app");
const assert = require("assert");

describe("Hello World Test", function () {
  it("should return Hello, World!", function () {
    assert.strictEqual(helloWorld(), "Hello, World!");
  });
});
