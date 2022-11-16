const mongoose = require("mongoose");

const Movie = require("../models/movies.model");

const movieList = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

const moviesToDataBase = movieList.map(
  (movieElement) => new Movie(movieElement)
);

mongoose
  .connect(
    "mongodb+srv://admin:UkkeCamper235@cluster0.8ivkog1.mongodb.net/myMovies?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const moviesRecovered = await Movie.find();
    if (moviesRecovered.length) {
      await Movie.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting the data ${err}`))
  .then(async () => {
    await Movie.insertMany(moviesToDataBase);
    console.log("The data-base has been created");
  })
  .catch((err) => console.log(`Error at creating the data-base ${err}`))
  .finally(() => mongoose.disconnect());
