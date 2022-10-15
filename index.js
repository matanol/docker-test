import express from "express";

const port = process.env.PORT ?? 5000;

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
  console.log(`[Express] is listening on port [new]: ${port}`);
});

// example build command (linux):
// docker build -t node:docker-dev -f Dockerfile.development .


// example runs command (linux):
// docker run -p 5000:5000 --name node-app -v "$(pwd)":/usr/src/app -v /usr/src/app/node_modules -it node:docker-dev
// docker run -p 5000:5000 --name node-app -v "$(pwd)":/usr/src/app -v /usr/src/app/node_modules node:docker-dev
