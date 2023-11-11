const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("Semester", semesterSchema);
