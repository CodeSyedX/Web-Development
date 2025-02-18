const fs = require("fs");

fs.writeFile("message.txt", "hello my very first node", (err) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("This file has been saved!");
});

fs.readFile("./message.txt","utf8" ,(err,data) =>{
    if (err) throw err;
    console.log(data);

});

// node "c:\Users\syed aafreen\OneDrive\Desktop\web bdevelopment\2.1 Using Node\tempCodeRunnerFile.js"