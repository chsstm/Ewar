exports.checkUserVaccineStatus = async ({ db }, { aadharNumber }) => {
   try {

      let user = await db.collection('VaccineDetails').findOne({ aadharNumber })
      if (user) {
         console.log("user", user)
         return user
      } else {
         throw "User Data is not Available"
      }

   }
   catch (error) {
      throw error
   }
}