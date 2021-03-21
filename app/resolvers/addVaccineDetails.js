exports.addVaccineDetails = async ({ db }, { name, aadharNumber, date, state, district, country, }) => {
   try {

      let existing = await db.collection('VaccineDetails').find({ aadharNumber: aadharNumber }).toArray()
      if (existing.length) {
         return `Entered Aadhar Number user details already exists.`
      }
       else {
         let user = { name, aadharNumber, date, state, district, country, vaccinated: true }
         let res = await db.collection('VaccineDetails').insertOne(user)
         if (res) {
            return "User Details added successfully"
         }
      }


   }
   catch (error) {
      throw error
   }
}