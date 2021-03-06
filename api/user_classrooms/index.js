const express = require('express');
const router = express.Router();
const passport = require('../passport');
const jwt = require('jsonwebtoken');

const user_classroomController = require('./user_classroomController');
const classroomController = require('../classrooms/classroomController');

router.get('/classrooms/:id', classroomController.getClassroomDetailWithID);

module.exports = router;
