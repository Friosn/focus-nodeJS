const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const directorSchema = new Schema(
  {
    name: { type: String, required: true },
    movie: { type: String, required: true },
    year: { type: Number },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Directors = mongoose.model("Directors", directorSchema);
module.exports = Movies;
