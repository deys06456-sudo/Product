
const express = require('express');

const StudentController =
require('../controller/student.controller');

const upload = 
require('../utils/multer');

const studentController = new StudentController();

const Route = express.Router();

// Create Student
// Route.post(
//     '/student/create',
//     studentController.CreateStudent
// );

// Post Image
Route.post(
    '/student/create',
    upload.single('image'),
    studentController.CreateStudent
);

//Get All Student
Route.get(
    '/student/get',
    studentController.getStudent
);

//Get Single Student
Route.get(
    '/student/:id',
    studentController.getsingleStudent
);

// Update Student
Route.put(
    '/student/update/:id',
    studentController.updateStudent
);

// Delete Student
Route.delete(
    '/student/delete/:id',
    studentController.deleteStudent
);


module.exports = Route;




