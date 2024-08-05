import express from "express";

const app=express();
const port =5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

app.get("/", (req, res) => {
    res.send("Server is working");
  });