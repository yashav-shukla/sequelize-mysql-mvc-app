const Student = require("../models/studentModel");

const getStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

module.exports = {
  getStudents,
};