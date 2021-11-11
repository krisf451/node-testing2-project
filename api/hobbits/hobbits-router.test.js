const server = require("../server");
const request = require("supertest");
const db = require("../../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("[GET] /hobbits", () => {
  test("responds with all hobbits", async () => {
    const res = await request(server).get("/api/hobbits");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]);
  });
});

describe("[GET] /hobbits/:id", () => {
  test("responds with correct hobbbit", async () => {
    const res = await request(server).get("/api/hobbits/1");
    expect(res.body).toEqual({ id: 1, name: "sam" });
  });
});

describe("[POST] /hobbits", () => {
  test("responds with the newly created hobbit", async () => {
    const res = await request(server)
      .post("/api/hobbits")
      .send({ name: "kristian" });
    expect(res.body).toMatchObject({ id: 5, name: "kristian" });
  });
});

describe("[DELETE] /hobbits/:id", () => {
  test("responds with the deleted hobbit", async () => {
    const res = await request(server).delete("/api/hobbits/1");
    expect(res.body).toMatchObject({ id: 1, name: "sam" });
  });
});

describe("[PUT] /hobbits/:id", () => {
  test("responds with the updated hobbit", async () => {
    const res = await request(server)
      .put("/api/hobbits/1")
      .send({ name: "testUpdate" });
    expect(res.body).toMatchObject({ id: 1, name: "testUpdate" });
  });
});