const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs/posts");
const resolvers = require("./resolvers/posts");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

//express server
const app = express();

//DB CONNECTION

mongoose
  .connect(process.env.CLOUD_URL_DOWNGRADE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULly");
  })
  .catch((err) => {
    console.log("DB THROW ERROR:", err);
  });

// Restful endpoint
app.get("/test", (req, res) => {
  res.send({
    data: "Hello world of data",
  });
});

//ApolloServer
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// passing express as a middleware to apolloServer
apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening at port number: ${process.env.PORT}`);
  console.log(
    `App listening at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
