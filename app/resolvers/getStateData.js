const axios = require("axios")

exports.getStateData = async ({ }, { stateName }) => {
   try {
      const options = {
         method: 'GET',
         url: process.env.CORONA_INDIA,
         headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY, }
      };

      let res = await axios.request(options)
      // console.log("Res", res)
      if (res.data.state_wise[stateName]) {
         let stateData = res.data.state_wise[stateName]
         stateData.district = Object.keys(res.data.state_wise[stateName].district).map(x => ({ name: x, ...res.data.state_wise[stateName].district[x]}))
         console.log(stateData)
         return stateData
      } else {
         throw "Please Enter Valid State Name"
      }

   }
   catch (error) {
      throw error
   }
}