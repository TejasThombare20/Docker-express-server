import express from "express";
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to docker express server </h1>
  <div>Docker</div>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})