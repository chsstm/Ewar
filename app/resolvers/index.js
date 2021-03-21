const { hello } = require('./hello')
const { getDataCountryWise } = require('./getDataCountryWise')
const { getDataStateWise } = require('./getDataStateWise')
const { getAllStateName } = require('./getAllStateName')
const { getAllDistName } = require('./getAllDistName')
const { getStateData } = require('./getStateData')
const { getDistrictData } = require('./getDistrictData')
const { addVaccineDetails } = require('./addVaccineDetails')
const { getVaccineDetails } = require('./getVaccineDetails')
const { checkUserVaccineStatus } = require('./checkUserVaccineStatus')
const { KnightProblem } = require('./KnightProblem')

exports.resolvers = {
  Query: {

    hello: () => hello(),
    getDataCountryWise: (_, args, context) => getDataCountryWise(context, args),
    getDataStateWise: (_, args, context) => getDataStateWise(context, args),
    getAllStateName: (_, args, context) => getAllStateName(context, args),
    getAllDistName: (_, args, context) => getAllDistName(context, args),
    getStateData: (_, args, context) => getStateData(context, args),
    getDistrictData: (_, args, context) => getDistrictData(context, args),
    getVaccineDetails: (_, args, context) => getVaccineDetails(context, args),
    checkUserVaccineStatus: (_, args, context) => checkUserVaccineStatus(context, args),
    knightProblem: (_, args, context) => KnightProblem(context, args)

  },
  Mutation: {
    addVaccineDetails: (_, args, context) => addVaccineDetails(context, args)
  }
};