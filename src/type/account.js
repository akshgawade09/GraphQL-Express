const { schemaComposer } = require("graphql-compose");

/* 
 *  via config
 */

const AccountTC = schemaComposer.createObjectTC({
    name: "Account",
    fields: {
        id: 'Int!',
        userId: 'Int!',
        number: 'String',
        balance: 'String'
    }
});

exports.AccountTC = AccountTC;