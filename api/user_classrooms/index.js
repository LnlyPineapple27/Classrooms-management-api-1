const express = require('express');
const router = express.Router();
const user_classroomController = require('./user_classroomController');
const classroomController = require('../classrooms/classroomController');

router.post('/invite/student', user_classroomController.createStudentRole);

router.post('/invite/teacher', user_classroomController.createTeacherRole);

router.get('/guest/classrooms/:id', classroomController.getClassroomDetailWithID);

router.put('/updateUserCode', user_classroomController.updateUserCode);

module.exports = router;
