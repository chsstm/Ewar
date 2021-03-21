const { gql } = require('apollo-server-lambda');

exports.Mutation = gql`
  type Mutation {
    hello: String
    addVaccineDetails( name: String!, aadharNumber: String!, date: String!, state: String!, district: String!, country: String! ): String
  }
`;