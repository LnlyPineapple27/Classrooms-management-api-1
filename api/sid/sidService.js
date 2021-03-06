const sidModel = require('./sidModel')

const sidService = {
    create: sidObj => sidModel
        .create(sidObj)
        .then(sidInstance => sidInstance)
        .catch(err => {
            console.log(err)
            return err
        }),
    findUserBySidAndClassroomId: (sid, classroomId) => sidModel
        .getUserID(sid, classroomId)
        .then(instance => instance)
        .catch(err => { 
            console.log(err)
            return err
        }),
    findAllByClassroomId: (classroomId) => sidModel
        .getAllByClassroomID(classroomId)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err;
        }),
    findBySidAndClassroomId: (sid, classroomId) => sidModel
        .getBySIDAndClassroomID(sid, classroomId)
        .then(instance => instance)
        .catch(err => {
            console.log(err)
            return err
        }),
    findByUserId: (userId) => sidModel
        .getByUserID(userId)
        .then(instance => instance)
        .catch(err => {
            console.log(err)
            return err
        }),
    findByUserIDAndClassroomID: (userId, classroomId) => sidModel
        .getByUserIDAndClassroomID(userId, classroomId)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err;
        }),
    findStudentAndScoreByClassroomID: (classroomId) => sidModel
        .getStudentAndScoreByClassroomID(classroomId)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err;
        }),
    updateName: (sidObj) => sidModel
        .updateName(sidObj)
        .then(result => result)
        .catch(err => {
            console.log(err);
        }),
    updateSID: (sid, userID, classroomID) => sidModel
        .updateSID(sid, userID, classroomID)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err
        }),
    updateUserID: (sid, userID, classroomID) => sidModel
        .updateUserID(sid, userID, classroomID)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err
        }),
    updateNameAndUserID: (sidObj) => sidModel
        .updateNameAndUserID(sidObj)
        .then(result => result)
        .catch(err => {
            console.log(err);
            return err
        }),
    
}

module.exports = sidService