import express from "express";
import { userRouter } from "./routes/user_route.js";
import { dbConnection } from "./config/db.js";

const app = express();

dbConnection();

// middlewares
app.use(express.json()); // allows you to send json data in body

// Routes
app.use(userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
