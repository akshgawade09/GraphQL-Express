const { schemaComposer, toInputObjectType } = require("graphql-compose");
const {AccountTC} = require("./account");
const {accounts} = require("../data/account");
const _ = require('lodash');
/* 
 *  via config
 */
const UserTC = schemaComposer.createObjectTC({
    name: "User",
    fields: {
        id: 'Int!',
        firstName: 'String',
        middleName: 'String',
        lastName: 'String',
        fullName: {
            type: 'String',
            resolve: (src) => {
                return src.firstName + " " + src.middleName + " " + src.lastName;
            }
        },
        age: 'Int',
        email: 'String',
        accountInfo: {
            type: [AccountTC],
            resolve: (src) => {
                return _.filter(accounts, { userId: src.id });
            }
        }
    },
});

const UserITC = toInputObjectType(UserTC);

module.exports = {
    UserTC: UserTC,
    UserITC: UserITC
};