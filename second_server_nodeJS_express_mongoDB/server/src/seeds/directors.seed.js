const mongoose = require("mongoose");

const Director = require("../models/names.model");

const directorList = [
  {
    movie: "The Matrix",
    name: "Hermanas Wachowski",
    status: "alive",
  },
  {
    movie: "The Matrix Reloaded",
    name: "Hermanas Wachowski",

    status: "alive",
  },
  {
    movie: "Buscando a Nemo",
    name: "Andrew Stanton",

    status: "alive",
  },
  {
    movie: "Buscando a Dory",
    name: "Andrew Stanton",

    status: "alive",
  },
  {
    movie: "Interestelar",
    name: "Christopher Nolan",

    status: "alive",
  },
  {
    movie: "50 primeras citas",
    name: "Peter Segal",

    status: "dead",
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
    const directorsRecovered = await Director.find();
    if (directorsRecovered.length) {
      await Director.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting the data ${err}`))
  .then(async () => {
    await Director.insertMany(moviesToDataBase);
    console.log("The data-base has been created");
  })
  .catch((err) => console.log(`Error at creating the data-base ${err}`))
  .finally(() => mongoose.disconnect());
