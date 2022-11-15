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

//Now we will add the params ---------
router.get("/movies/:movie", (req, res) => {
  //Now we want to get the NAME of the requested param  'movie' (because of '/movies/:MOVIE)
  const name = req.params.movie;
  //We have to add the movies here
  const movies = [
    "Princess Mononoke",
    "Interestate 60",
    "Fear and Loathing in Las Vegas",
  ];

  const movieFound = movies.indexOf(name);
  //Now we give the possibility of an error
  if (movieFound === -1) res.send("404- Path Not Found");
  //And as a right answer we'll get the asked movie by going throught he array of movies with the index of the one selected
  res.send(movies[movieFound]);
});

//It could be also posible to personalize one route (to complex it a bit more)

router.get("/greeting", (req, res) => {
  const name = req.query.name;
  const surname = req.query.surname;
  res.send(`Hey from NodeJS Mss or Mr ${name} ${surname}`);
});
//To use this we'll have to type on the browser this --> http://localhost:8080/greeting/?name=WhateverName&surname=WhateverSurname

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
