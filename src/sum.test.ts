import { sum } from "./sum";

describe("sum", () => {
    let sumResult: number;

    beforeAll(() => {
        sumResult = 6;
    });

    afterAll(() => {
        sumResult = 0;
    });

    it("sum of 1 + 2 must be 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(4);
    });

    it("sum of 3 + 3 must be 6", () => {
        const result = sum(3, 3);
        expect(result).toBe(sumResult);
    });
});
