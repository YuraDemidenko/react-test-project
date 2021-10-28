const {buildSchema} = require('graphql')

const schema = buildSchema(`


    type Continents {
        name: String
        countries: [Countries]
    }

    type Countries {
       name: String,
       capital: String
    }

    type Query {
        getAllContinents: [Continents]
    }
    
`)

module.exports = schema