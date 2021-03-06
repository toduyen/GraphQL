const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
const cors = require('cors');
app.use(cors());
// Cấu hình liên kết HTTP tới GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {console.log('dang chay cong 5000')});
