const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/find", (req, res) => {
    // Handle the POST request here
    const {userInfo} = req.body;
    console.log("Received user info:", userInfo);
  
    // Perform any necessary operations with userInfo
  
    // Send a response back to the frontend, if needed
    // For example, you can send a success message
    res.status(200).json({ message: "Data received successfully" });
  });



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
