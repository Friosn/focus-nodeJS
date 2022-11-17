const mongoose = require("mongoose");

const Director = require("../models/directors.model");

const dotenv = require("dotenv");
dotenv.config();

const directorList = [
  {
    name: "Hermanas Wachowski",
    movie: "The Matrix",
    year: 1000,
    status: "alive",
  },
  {
    name: "Hermanas Wachowski",
    movie: "The Matrix Reloaded",
    year: 1000,
    status: "alive",
  },
  {
    name: "Andrew Stanton",
    movie: "Buscando a Nemo",
    year: 1000,
    status: "alive",
  },
  {
    name: "Andrew Stanton",
    movie: "Buscando a Dory",
    year: 1000,
    status: "alive",
  },
  {
    name: "Christopher Nolan",
    movie: "Interestelar",
    year: 1000,
    status: "alive",
  },
  {
    name: "Peter Segal",
    movie: "50 primeras citas",
    year: 1000,
    status: "dead",
  },
];

const directorsToDataBase = directorList.map(
  (directorElement) => new Director(directorElement)
);
/*process.env.MONGO_URI
 */ mongoose
  .connect(
    "mongodb+srv://admin:UkkeCamper235@cluster0.8ivkog1.mongodb.net/myMovies?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const directorsRecovered = await Director.find();
    console.log(directorsRecovered);
    if (directorsRecovered.length) {
      await Director.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting the data ${err}`))
  .then(async () => {
    await Director.insertMany(directorsToDataBase);
    console.log("The data-base has been created");
  })
  .catch((err) => console.log(`Error at creating the data-base ${err}`))
  .finally(() => mongoose.disconnect());
