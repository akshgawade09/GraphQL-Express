const {UserTC, UserITC} = require("../type/user");
const {users} = require("../data/user");
const _ = require("lodash");

let userResolver = function () {};

userResolver.users = UserTC.addResolver(
    {
        name: 'findAll',
        type: [UserTC],
        resolve: async () => {
            return users;
        }
    }
)

userResolver.userUpdateById = UserTC.addResolver(
    {
        name: 'updateById',
        type: UserTC,
        args: {
            input: UserITC,
        },
        resolve: async ({args}) => {
            let input = args.input;
            let result = users.find(user => user.id === input.id);
            if (result && typeof result !== typeof undefined) {
                let index = users.findIndex(user => user.id === input.id)
                let keyArr = Object.keys(input);
                keyArr = keyArr.filter(key => key !== "id");
                if (keyArr.length) {
                    keyArr.forEach(key => {
                        users[index][keyArr] = input[key];
                    })
                }
                return users[index];
            }
        }
    }
)
