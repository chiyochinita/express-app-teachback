const request = require('supertest');
const app = require('../app'); 

describe("Test the root path", () => {
    test("page3 test", done => {
      request(app)
        .get("/page3.html")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });