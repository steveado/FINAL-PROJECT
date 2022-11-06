const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const usersRoute = require("./routes/users");
const packageRoute = require("./routes/package");
const errorHandler = require("./middlewares/error-handler");

const app = express();
app.use(express.json());

app.use(
    cookieSession({
        keys: ["oprestrepo"],
    })
);

app.use("/api/user", usersRoute);
app.use("/api/package", packageRoute);
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
