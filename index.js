const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');

const continents = [
    {
        name: 'Africa',
        countries: [{name: 'Livia', capital: 'dcscsdc'}]
    },

    {
        name: 'Australia',
        countries: [{name: 'Australia', capital: 'dcscsdc'}]
    },

    {
        name: 'Antarctica',
        countries: [{name: 'no-country', capital: 'dcscsdc'}]
    },

    {
        name: 'Euro-Asia',
        countries: [{name: 'Livia', capital: 'dcscsdc'}]
    }
]

const schema = require('./schema')
const app = express() 
app.use(cors())

const root = {

    getAllContinents: () => {
        return continents
    }
}



app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'))