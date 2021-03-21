const axios = require("axios")

exports.getAllDistName = async ({ db }, { stateName }) => {
   try {
      const options = {
         method: 'GET',
         url: process.env.CORONA_INDIA,
         headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY, }
      };

      let res = await axios.request(options)
      console.log("Res", res)
      if (res.data) {
         console.log(res.data)
         let states = Object.keys(res.data.state_wise[stateName].district).map(x => x)
         return states
      } else {
         throw res.error
      }

   }
   catch (error) {
      throw error
   }
}