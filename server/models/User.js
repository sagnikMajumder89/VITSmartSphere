const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: String,
  officialId: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
