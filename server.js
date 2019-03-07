import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose'
import {
  buildSchema
} from 'graphql';
require("dotenv").config();
import isUserAuth from './api/middleware/isUserAuth'
import schema from './api/schema'
import rootResolver from './api/resolvers/index'

const port = 9000

const app = express();
app.use(bodyParser.json());
app.use(isUserAuth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/graphql',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true
  }));

  app.get('/', (req, res, next) => {
    res.json('Welcome to Vision Predict GraphQl Server!');
  });
  mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => console.log(`DB connected! <> Server running on http://localhost:${port}`));
  }).catch((err) => {
    console.log(err)
  })