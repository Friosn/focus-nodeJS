const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
