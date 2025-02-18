import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    console.log("Received a GET request");
    console.log(req.rawHeaders);
    res.send("hello world");
});

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
