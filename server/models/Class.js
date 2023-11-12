const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  courses: [
    {
      courseDetails: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      facultyDetails: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

module.exports = mongoose.model("Class", classSchema);
