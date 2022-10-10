import express from "express";

const port = process.env.PORT ?? 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi :)</h1>");
});

const res = await new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "fake promise" });
  }, 1000);
});

console.log(res?.message);

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`);
});
