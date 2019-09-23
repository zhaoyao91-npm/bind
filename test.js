const bind = require(".");

describe("bind", () => {
  it("should bind", () => {
    function add(b, c) {
      return this.a + b + c;
    }

    const obj = {
      a: 1,
      sum: add
    };

    const result = bind(obj, "sum", 2)(3);

    expect(result).toBe(6);
  });
});
