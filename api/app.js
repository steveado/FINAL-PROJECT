const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");

const usersRoute = require("./routes/users");
const packageRoute = require("./routes/package");
const applicationRoute = require("./routes/application");

const errorHandler = require("./middlewares/error-handler");

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    keys: ["oprestrepo"],
  })
);

app.get("/", (req, res) => {
  res.send("<h1>API HOME PAGE</h1>");
});

app.use("/api/user", usersRoute);
app.use("/api/package", packageRoute);
app.use("/api/application", applicationRoute);

app.use(errorHandler);

mongoose
  .connect(
    `mongodb+srv://haroldobasi:delivery@cluster0.vlfwi4s.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DATABASE CONNECTION SUCCESSFUL");
  });

app.listen(8000, () => {
  console.log("server is live @8000");
});
