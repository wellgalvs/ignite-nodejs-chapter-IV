import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create Category Controller", () => {
  it("Test", async () => {
    await request(app).get("/cars/available").expect(201);
  });
});