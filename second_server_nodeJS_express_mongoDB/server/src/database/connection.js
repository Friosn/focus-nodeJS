const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

/* const mongoURI = process.env.MONGO_URI; */

const connect = async () => {
  try {
    const dBConnect = await mongoose.connect(
      "mongodb+srv://admin:UkkeCamper235@cluster0.8ivkog1.mongodb.net/myMovies?retryWrites=true&w=majority",
      {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const { name, host } = dBConnect.connection;
    console.log(
      `Connecting to the data-base 🧙🏼‍♂️ ${name} in the heart of the host: ${host}`
    );
  } catch (error) {
    console.error(`We couldn't connect with the data-base 😣`, error);
  }
};

module.exports = { connect };
