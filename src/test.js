const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require("graphql");

/*
 *  via GraphQLObjectType
 */
/* const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        middleName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        fullName: {
            type: GraphQLString,
            resolve: (src, args) => {
                return src.firstName + " " + src.middleName + " " + src.lastName;
            }
        },
        age: {type: GraphQLInt},
        email: {type: GraphQLString}
    }
});

const UserTC = schemaComposer.createObjectTC(UserType); */

/* 
 *  via SDL => Got Error
 */
const UserTC = schemaComposer.createObjectTC(`
    type User {
        id: Int!
        firstName: String
        middleName: String
        lastName: String
        fullName: {
            type: String,
            resolve: (src) => {
                return src.firstName + " " + src.middleName + " " + src.lastName;
            }
        }
        age: String
        email: String
    }
`);