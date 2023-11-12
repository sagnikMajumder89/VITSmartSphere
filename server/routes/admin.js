const router = require("express").Router();
const Semester = require("../models/Semester");
const Course = require("../models/Course");
const Class = require("../models/Class");
const User = require("../models/User");
const { isLoggedIn, isAdmin } = require("../middlewares");

router.post("/createSemester", isLoggedIn, isAdmin, async (req, res) => {
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

router.post("/addCourse", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const { title, code, school } = req.body.course;
    const course = new Course({ title, code, school });
    const newCourse = await course.save();
    res
      .status(200)
      .json({ message: `Course created with id: ${newCourse._id}` });
  } catch (e) {
    res.status(400).json({ message: `Error adding course: ${e.message}` });
  }
});

router.post("/createClass", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const { title } = req.body.class;
    const class_ = new Class({ title });
    const newClass = await class_.save();
    res.status(200).json({ message: `Class created with id: ${newClass._id}` });
  } catch (e) {
    res.status(400).json({ message: `Error adding class: ${e.message}` });
  }
});

router.post("/addStudents", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const { classId, students } = req.body;
    const class_ = await Class.findById(classId);
    students.forEach(async (student) => {
      class_.students.push(student);
    });
    await class_.save();
    res.status(200).json({ message: `Students added to class` });
  } catch (e) {
    res.status(400).json({ message: `Error adding students: ${e.message}` });
  }
});

router.post(
  "/:semid/addCourseToClass",
  isLoggedIn,
  isAdmin,
  async (req, res) => {
    try {
      const semester = await Semester.findById(req.params.semid).populate(
        "classes"
      );
      const { courseId, classId, facultyId } = req.body;
      const course = await Course.findById(courseId);
      const class_ = await Class.findById(classId);
      const faculty = await User.findById(facultyId);
      if (!course) {
        return res
          .status(400)
          .json({ message: `Course with id: ${courseId} not found` });
      }
      if (!faculty) {
        return res
          .status(400)
          .json({ message: `Faculty with id: ${facultyId} not found` });
      }
      class_.courses.push({
        courseDetails: courseId,
        facultyDetails: facultyId,
      });

      await class_.save();
      if (!semester.classes.includes(class_._id)) {
        semester.classes.push(class_.id);
        await semester.save();
      }
      res.status(200).json({ message: `Course added to class` });
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error adding course to class: ${e.message}` });
    }
  }
);

module.exports = router;
