const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  school: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Course", courseSchema);
