import express from "express";

const app = express();
const port = 3000;

// Define a route for the root path
app.get("/", (req, res) => {
    console.log("Received a GET request");
    console.log(req.rawHeaders);
    res.send("<h1>hello world</h1>");
});

app.get("/about", (req, res) => {
    console.log("Received a GET request");
    console.log(req.rawHeaders);
    res.send("<h1>behenchod</h1>");
});

app.get("/contact", (req, res) => {
    console.log("Received a GET request");
    console.log(req.rawHeaders);
    res.send("<h1>hell</h1>");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
