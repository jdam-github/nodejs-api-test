
import request from "supertest";
import app from "./app.js";



//POST USERS ENDPOINT
describe("POST  /users", () => {
    describe("given a username and password", () => {
        //should save the username and password to the database

        //should respond with a 200 status code
        it("should respond with a 200 status code", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        });
        //should specify json in the content type header
        it("should specify json in the content type header", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            });

            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        });

        //Check if the response contains json with 'userId'
        it("Check response contain userId", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            });
            expect((response.body.userId)).toBeDefined();

        });



    });

    //when the username and password is missing
    describe("when the username or password is missing", () => {
        //should respond with a status code 400
        it("when the username or password is missing", async () => {
            const bodyData = [
                {username: "testuser"},
                {password:"psswd"}, 
                {}
            ]

            for (const body of bodyData) {
                const response = await request(app).post("/users").send(body)

                expect(response.statusCode).toBe(400)
            }
        });
    })
})


