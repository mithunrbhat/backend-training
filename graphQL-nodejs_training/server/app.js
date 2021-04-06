const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://20030895:20030895@mymongodb.thcr2.mongodb.net/graphqlTesting?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

mongoose.connection.once("open", () => {
  console.log("<open> event : connected to mongo db");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
