const express = require('express');
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;

const app = express();
//connect to database
connectDB();

app.use('/graphQL', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port ${port}`));

