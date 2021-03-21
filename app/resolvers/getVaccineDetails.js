exports.getVaccineDetails = async ({ db }, { type, value }) => {
   try {

      let users = await db.collection('VaccineDetails').find({ [type]: value, vaccinated: true }).toArray()
      console.log("users", users)
      if (users.length) {
         return users
      } else {
         throw "Please check the entered Type and Value."
      }

   }
   catch (error) {
      throw error
   }
}