const express = require("express");
const app = express();

import fetch from "node-fetch";

app.get("/", (req, res) => {
  res.send("Welcome to learn backend with express!");
});
app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});

app.get("/companies", async (req, res) => {
  // if (!req.body.name) {
  //     return res.status(400).send({ success: “false”, message: “name is required”, });
  // } else if (!req.body.companies) {
  //      return res.status(400).send({ success: “false”, message: “companies is required”, });
  //     }
  //     const user = { id: userList.length + 1, isPublic: req.body.isPublic, name: req.body.name, companies: req.body.companies, books: req.body.books };
  //     userList.push(user);
  //     return res.status(201).send({ success: “true”, message: “user added successfully”, user, });
  const response = await fetch(
    "http://182.93.84.51:9048/bc170/api/v1.0/companies",
    {
      method: "get",
      // body: JSON.stringify(body),
      headers: {
        Authorization: "Basic QVBQVVNFUjpMc2FAIzIwMjI=",
      },
    }
  );
  const data = await response.json();

  console.log(data);
  return res.status(200).send(data);
});
