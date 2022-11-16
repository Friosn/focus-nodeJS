const express = require("express");
const cors = require("cors");

const { connect } = require("./database/connection");

const Movies = require("./models/movies.model");
const Directors = require("./models/directors.model");

connect();

const server = express();

server.use(cors());
const router = express.Router();

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movies.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/directors", async (req, res) => {
  try {
    const directors = await Directors.find();
    return res.status(200).json(directors);
  } catch (error) {
    return res.status(500).json(error);
  }
});

server.use("/cinema/", router);
server.listen(process.env.PORT, () => {
  console.log("Does this work?");
});
