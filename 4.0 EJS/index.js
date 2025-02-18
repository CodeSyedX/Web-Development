import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Obtain __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to work harder";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "It's time to have some fun";
    }

    res.render("index", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




/*
<p>Today is <%= dayType %>.</p>
<p><%= advice %></p>

<p><%- someHtmlContent %></p>

<% if (dayType === "the weekend") { %>
    <p>Enjoy your weekend!</p>
<% } else { %>
    <p>Work hard!</p>
<% } %>

<%# This is a comment and won't show up in the HTML %>

<p>This will output <% as is in the HTML.</p>

*/



