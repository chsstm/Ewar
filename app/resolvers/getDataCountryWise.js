const axios = require("axios")

exports.getDataCountryWise = async ({ db }) => {
   try {

      const options = {
         method: 'GET',
         url: process.env.CORONA_WORLDWIDE,
         headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY, }
      };

      let res = await axios.request(options)
      console.log("Res", res)
      if (res.data) {
         console.log(res.data)
         return res.data.countries_stat
      }

   }
   catch (error) {
      throw error
   }
}