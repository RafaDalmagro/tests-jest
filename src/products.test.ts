import request from "supertest";
import { app } from "./app";
describe("products", () => {
    it("should return a list of products", async () => {
        const response = await request(app).get("/products");

        expect(response.status).toBe(200);
    });
});
