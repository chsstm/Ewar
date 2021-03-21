const { gql } = require('apollo-server-lambda');

exports.CountryDataType = gql`
  type CountryDataType {
      country_name: String
      cases: String
      deaths: String
      region: String
      total_recovered: String
      new_deaths: String
      new_cases: String
      serious_critical: String
      active_cases: String
      total_cases_per_1m_population: String
      deaths_per_1m_population: String
      total_tests: String
      tests_per_1m_population: String
  }
`
exports.StateDataType = gql`
  type StateDataType {
      active: String
      confirmed: String
      deaths: String
      deltaconfirmed: String
      deltadeaths: String
      deltarecovered: String
      lastupdatedtime: String
      migratedother: String
      recovered: String
      state: String
      statecode: String
      statenotes: String
      district: [StateDistrictType]
  }
`
exports.StateDistrictType = gql`
  type StateDistrictType {
    name: String
    notes: String,
    active: Int,
    confirmed: Int,
    deceased: Int,
    recovered: Int,
    delta: DeltaType
  }
`
exports.DistrictType = gql`
  type DistrictType {
    notes: String,
    active: Int,
    confirmed: Int,
    deceased: Int,
    recovered: Int,
    delta: DeltaType
  }
`
exports.DeltaType = gql`
  type DeltaType {
    confirmed: Int
    deceased: Int
    recovered: Int
  }
`
exports.StateType = gql`
  type StateType {
      active: String
      confirmed: String
      deaths: String
      deltaconfirmed: String
      deltadeaths: String
      deltarecovered: String
      lastupdatedtime: String
      migratedother: String
      recovered: String
      state: String
      statecode: String
      statenotes: String
      district: DistrictType
  }
`
exports.User = gql`
  type User {
    name: String
    aadharNumber: String
    date: String
    state: String
    district: String
    country: String
    vaccinated: String
    _id: String
  }
`
exports.KnightPosition = gql`
  type KnightPosition {
    start: [Int]
    target: [Int]
  }
`
