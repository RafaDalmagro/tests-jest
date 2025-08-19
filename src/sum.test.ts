import { sum } from "./server";

test("sum of 1 + 2 must be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(4);
});
