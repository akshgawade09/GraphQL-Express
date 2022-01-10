const {UserTC} = require("../type/user");
require("../resolver/user");

const UserQuery = {
    users: UserTC.getResolver("findAll")
}

const UserMutation = {
    userUpdateById: UserTC.getResolver("updateById")
}

exports.UserQuery = UserQuery;
exports.UserMutation = UserMutation;