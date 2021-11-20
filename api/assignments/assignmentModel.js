const model = require('../../models');
const Assignment = model.Assignment;

//----------------------------------------------------------Create----------------------------------------------------------
exports.create = async (assignment) => {
    return await Assignment.create({
        classroomID: assignment.classroomID,
        name: assignment.name,	
        maxPoint: assignment.maxPoint,
        description: assignment.description,	
        start_time: assignment.start_time,
        end_time: assignment.end_time
    });
};

//----------------------------------------------------------Read----------------------------------------------------------
// id cannot be duplicate
exports.getAssignmentWithID = async (id) => {
    return await Assignment.findOne({
        raw: true,
        where: {
            id: id
        },
        attributes: {
            exclude: ['createdAt, updatedAt']
        }
    })
}

// assingment name in a class cannot be duplicate
exports.getAssignmentWithNameAndClassroomID = async (name, classroomID) => {
    return await Assignment.findAll({
        raw: true,
        where: {
            name: name,
            classroomID: classroomID
        },
        attributes: {
            exclude: ['createdAt, updatedAt']
        }
    })
}

// get all assignment in a classroom
exports.getAssignmentWithClassroomID = async (classroomID) => {
    return await Assignment.findAll({
        raw: true,
        where: {
            classroomID: classroomID
        },
        attributes: {
            exclude: ['createdAt, updatedAt']
        }
    })
}

//----------------------------------------------------------Update----------------------------------------------------------
exports.update = async (assignment) => {
    return await Assignment.update({
        name: assignment.name,	
        maxPoint: assignment.maxPoint,
        description: assignment.description,	
        start_time: assignment.start_time,
        end_time: assignment.end_time
    }, {
        where: {
            classroomID: assignment.classroomID
        }
    })
}

//----------------------------------------------------------Delete----------------------------------------------------------
// may need to check this later
exports.delete = async (id, name, classroomID) => {
    if (id)
        return await Assignment.delete({
            where: {
                id: id,
                classroomID: classroomID
            }
        });
    else return await Assignment.delete({
        where: {
            name: name,
            classroomID: classroomID
        }
    })
}