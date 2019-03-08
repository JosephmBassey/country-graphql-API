import Activity from '../models/Activity';


module.exports = {
 getActivity: async (_,req) => {
  if (!req.isUserAuth) {
    throw new Error('User Not Authenticated!')
  }
   try {
     const activities = await
     Activity.find().populate('user')

       console.log(activities)

     return activities.map(activity => {
       return {
         ...activity._doc,
         createdAt: new Date(activity._doc.createdAt).toISOString(),

       };
     });
   } catch (err) {
     throw err;
   }
 },
}
