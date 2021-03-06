const model = require('../../models');
const Account = model.Account;

//----------------------------------------------------------Create----------------------------------------------------------
// fix this later
exports.create = async (account) => {
    return await Account.create({
        username: account.username,
        password: account.password,
        userID: account.userID,
        createdDate: account.createdDate,
        googleToken: account.googleToken
    })
}

//----------------------------------------------------------Read----------------------------------------------------------
// user id from Account model
exports.getAccountWithID = async (id) => {
    return await Account.findOne({
        where: {
            id: id
        },
        raw: true
    });
};

// use userID, one account belong to one user technically *shrug*
exports.getAccountWithUserID = async (userID) => {
    return await Account.findOne({
        where: {
            userID: userID
        },
        raw: true
    });
};

exports.getAccountWithUsername = async (username) => {
    return await Account.findOne({
        where: {
            username: username
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'createdDate']
        },
        raw: true
    });
}

exports.getAllAccount = async () => {
    return await Account.findAll({
        raw: true,
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'createdDate']
        }
    })
}

//----------------------------------------------------------Update----------------------------------------------------------
// fix this later
exports.update = async (account) => {
    return await Account.update({
        username: account.username,
        password: account.password,
        googleToken: account.googleToken
    }, {
        where: {
            id: account.id
        }
    });
}

//----------------------------------------------------------Delete----------------------------------------------------------
exports.delete = async (id) => {
    return await Account.destroy({
        where: {
            id: id
        },
    });
}
