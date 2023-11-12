const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

module.exports = mongoose.model("Semester", semesterSchema);
