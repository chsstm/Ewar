const axios = require("axios")

exports.getDistrictData = async ({ }, { stateName, distName }) => {
   try {
      const options = {
         method: 'GET',
         url: process.env.CORONA_INDIA,
         headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY, }
      };

      let res = await axios.request(options)
      console.log("Res", res)
      if (res.data.state_wise[stateName].district[distName]) {
         console.log(res.data.state_wise[stateName].district)
         return res.data.state_wise[stateName].district[distName]
      } else {
         throw "Please Enter Valid State & Dist Name."
      }

   }
   catch (error) {
      throw error
   }
}