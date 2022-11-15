const express = require("express");

const PORT = 8080;

const server = express();

//el router ser´´a el encargado de
const router = express.Router();

router.get("/director", (req, res) => {
  res.send("Directors");
});

router.get("/movies", (req, res) => {
  res.send("Movies");
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
