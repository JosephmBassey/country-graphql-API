import {
  compare,
  hash
} from 'bcryptjs'
import User from '../models/User'
import jwt from 'jsonwebtoken'

module.exports = {
    userRegistration: async ({
      userInput
    }) => {
      try {
        const user = new User({
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          username: userInput.username,
          dob: userInput.dob,
          password: userInput.password,
        });

        const result = await user.save();
        console.log(result)

        return {
          ...result._doc,
          password: null,
          _id: result.id
        };
      } catch (err) {
        throw err;
      }
    },
   userLogin: async ({
     email,
     password
   }, req) => {
     const user = await User.findOne({
       email: email
     });
     if (!user) {
       throw new Error('User does not exist!');
     }
     const isEqual = await compare(password, user.password);
     if (!isEqual) {
       throw new Error('Password is incorrect!');
     }
     const token = jwt.sign({
         userId: user._id,
         email: user.email,
         username:user.username
       },
       process.env.USER_JWT_TOKEN, {
         expiresIn: '1h'
       }
     );

     return {
       userId: user.id,
       token: token,
       tokenExpiration: 1
     };
   },

  }
