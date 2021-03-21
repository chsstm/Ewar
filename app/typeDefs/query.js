const { gql } = require('apollo-server-lambda');

exports.Query = gql`
  type Query {
    hello: String,
    getDataCountryWise: [CountryDataType]
    getAllStateName: [String]
    getDataStateWise: [StateDataType]
    getStateData(stateName: String!): StateDataType
    getAllDistName(stateName: String!): [String]
    getDistrictData(stateName: String!, distName: String!): DistrictType
    
    getVaccineDetails(type: String!, value: String!): [User]
    checkUserVaccineStatus(aadharNumber: String!): User
    
    knightProblem(start: [Int]!, target: [Int]!): String
    
  }
`;