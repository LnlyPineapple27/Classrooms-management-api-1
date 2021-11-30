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
        .getByClassroomID(classroomId)
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
}

module.exports = sidService