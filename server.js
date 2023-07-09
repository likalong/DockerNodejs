'use strict'

const express = require("express");

// Constant
const PORT = 8000;
const HOST = '0.0.0.0';

//App
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(PORT, HOST, () => {
  // console.log("Started application on port %d %d", HOST, PORT);
  console.log(`Running on http://${HOST}:${PORT}`);
});