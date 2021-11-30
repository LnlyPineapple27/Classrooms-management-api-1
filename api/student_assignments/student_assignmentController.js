const student_assignmentService = require('./student_assignmentService');
const sidService = require('../sid/sidService');

exports.create = async (req, res) => {
    let sid = parseInt(req.params.sid);
    let classroomId = parseInt(req.params.classroomId);
    let result = await sidService.findBySidAndClassroomId(sid, classroomId);
    if (result) {
        let student_assignment = {
            userID: result.userID,
            assignmentID: parseInt(req.params.assignmentId),
            score: parseFloat(req.body.score).toFixed(1),
            status: 1
        }
        let newSA = await student_assignmentService.create(student_assignment);
        if (newSA) {
            return res.status(200).json(newSA);
        }
        else return res.status(500).json({msg: 'Can not create new student_assignment'});
    }
    else {
        return res.status(404).json({msg: 'This SID does not belong to any user'});
    }
}

exports.getStudentAssignment = async (req, res) => {
    let sid = parseInt(req.params.sid);
    let classroomId = parseInt(req.params.classroomId);
    let result = await sidService.findBySidAndClassroomId(sid, classroomId);
    if (result) {
        let student_assignment = {
            userID: result.userID,
            assignmentID: parseInt(req.params.assignmentId),
        }
        let result = await student_assignmentService.getStudentAssignment(student_assignment.userID, student_assignment.assignmentID);
        if (result) {
            return res.status(200).json(result);
        }
        else return res.status(500).json({msg: 'Cannot find result match this userID, assignmentID'});
    }
    else {
        return res.status(404).json({msg: 'This SID does not belong to any user'});
    }
}

exports.update = async (req, res) => {
    let sid = parseInt(req.params.sid);
    let classroomId = parseInt(req.params.classroomId);
    let result = await sidService.findBySidAndClassroomId(sid, classroomId);
    if (result) {
        let student_assignment = {
            userID: result.userID,
            assignmentID: parseInt(req.params.assignmentId),
            score: parseFloat(req.body.score).toFixed(1),
            status: 1
        }
        let updatedSA = await student_assignmentService.update(student_assignment);
        if (updatedSA) {
            return res.status(200).json({msg: 'Update successfully'});
        }
        else return res.status(500).json({msg: 'Update fail'});
    }
    else {
        return res.status(404).json({msg: 'This SID does not belong to any user'});
    }
}

exports.delete = async (req, res) => {
    let sid = parseInt(req.params.sid);
    let classroomId = parseInt(req.params.classroomId);
    let result = await sidService.findBySidAndClassroomId(sid, classroomId);
    if (result) {
        let student_assignment = {
            userID: result.userID,
            assignmentID: parseInt(req.params.assignmentId),
        }
        let result = await student_assignmentService.delete(student_assignment.userID, student_assignment.assignmentID);
        if (result) {
            return res.status(200).json({msg: 'Delete successfully'});
        }
        else return res.status(500).json({msg: 'Delete fail'});
    }
    else {
        return res.status(404).json({msg: 'This SID does not belong to any user'});
    }
}
