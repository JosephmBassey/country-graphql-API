import Activity from '../models/Activity'
import Country from '../models/Country'
module.exports = {
  getCountries: async (_, req) => {
    if(!req.isUserAuth){
      throw new Error('User Not Authenticated!')
    }
    try {
      const countries = await
      Country.find()
         const getActivity = new Activity({
           activityType: "Fetch Countries",
           user: req.userId,
           country: countries._id
         })
          await getActivity.save()
    return countries.map((country)=>{
           return country
         })

    } catch (err) {
      throw err;
    }
  },
  addCountry: async ({
    name, continent
  }, req) => {
     if (!req.isUserAuth) {
       throw new Error('User Not Authenticated!')
     }
    try {
      const newCountry = new Country({
        name,
        continent
        })
      const savedCountry = await newCountry.save()
         const addActivity = new Activity({
           activityType: "Added A Country",
           user: req.userId,
         })
          await addActivity.save()
      return {
        ...savedCountry._doc,
      };

    } catch (err) {
      throw err

    }

  },
  deleteCountry: async ({
    countryId
  },req) => {
     if (!req.isUserAuth) {
       throw new Error('User Not Authenticated!')
     }
    try {
      const findId = await Country.findById(countryId);
      if (!findId) {
        throw new Error('No Record found for the given ID!')
      }
      const country = await Country.findByIdAndDelete(countryId)
      const deletedActivity = new Activity({
        activityType: "Deleted A Country",
        user: req.userId,
      })
      await deletedActivity.save()
      return country;
    } catch (err) {
      throw err;
    }
  },
  updateCountry: async ({
    countryId,
    name, continent
  },req) => {
     if (!req.isUserAuth) {
       throw new Error('User Not Authenticated!')
     }
    try {
      const foundCountry = await Country.findById(countryId);
      if (!foundCountry) {
        throw new Error('No Record found for the given ID!')
      }
      const updatedCountry = await Country.
      findOneAndUpdate({
        _id: countryId
      }, {
        $set: {
          name,
          continent
        }
      }, {
        new: true
      });
  const updatedActivity = new Activity({
    activityType: "Updated a Country",
    user: req.userId,
  })
  await updatedActivity.save()

      return {
        ...updatedCountry._doc
      }
    } catch (err) {
      throw err;
    }
  },

};