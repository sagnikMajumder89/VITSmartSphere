const router = require("express").Router();
const Semester = require("../models/Semester");

router.post("/createSemester", async (req, res) => {
  try {
    const semester = new Semester(req.body.semester);
    const newSem = await semester.save();
    res
      .status(200)
      .json({ message: `Semester created with id: ${newSem._id}` });
  } catch (e) {
    res.status(400).json({ message: `Error saving semester: ${e.message}` });
  }
});

module.exports = router;
