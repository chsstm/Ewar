const { Query } = require('./query')
const { Mutation } = require('./mutatioin')
const { User, CountryDataType, StateDataType, StateType, DistrictType, DeltaType, StateDistrictType, KnightPosition } = require('./queryTypes')

exports.typeDefs = [
   Query,
   Mutation,

   User, CountryDataType, StateDataType, StateType, DistrictType, DeltaType, StateDistrictType, KnightPosition
]