const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const graphqlSchema = require("./schema/index");
const { graphqlHTTP } = require("express-graphql");

app.get("/hello", (req, res) => {
    res.send("Hello Akshay...");
})

app.use("/graphql",
    graphqlHTTP(() => {
        return {
            graphiql: true,
            schema: graphqlSchema
        }
    })
);

app.listen(port, () => {
    console.log(`Application is running on ${port}.`);
});