const axios = require("axios")

exports.getDataStateWise = async ({ db }) => {
   try {
      const options = {
         method: 'GET',
         url: process.env.CORONA_INDIA,
         headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY, }
      };

      let res = await axios.request(options)

      if (res.data.state_wise) {
         stateData = Object.keys(res.data.state_wise).map(x => ({ name: x, ...res.data.state_wise[x], district: Object.keys(res.data.state_wise[x].district).map(y => ({name: y, ...res.data.state_wise[x].district[y]})) }))
         return stateData
      }

   }
   catch (error) {
      throw error
   }
}