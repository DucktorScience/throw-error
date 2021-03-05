import throwError from "../index";

describe("throwError", () => {
    it("returns a function that when called throws an error with the provided message", () => {
        expect(throwError("Expected error")).toThrowError("Expected error");
    });
});
