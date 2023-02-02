const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const rootValue = {
  message: () => 'Hello, World!'
};

const app = express();

app.get('/hello', (req, res) => {
  res.json({"success":"ok"});
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL API running on http://localhost:4000/graphql');
  console.log('Hello endpoint available at http://localhost:4000/hello');
});
