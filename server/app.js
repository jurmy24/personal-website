const express = require("express");
require("./db");
const PORT = process.env.PORT || 3000; // either use the process.env.PORT once API is live or use 8000 locally

const app = express();

const userRouter = require("./routers/user.router");

app.get("/", (req, res) => {
  res.send("<h1>Name: Victor Oldensand</h1>");
});

// This line makes sure we take req and turn it into json format
app.use(express.json());
app.use("/api/user/", userRouter);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
