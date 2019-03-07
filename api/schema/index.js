import {
  buildSchema
} from 'graphql';

module.exports = buildSchema(`
 type User {
  _id: ID!
  firstName: String!
  lastName: String
  username: String!
  email: String!
  password: String
  dob: String
  createdAt: String!
 }

type UserAuthToken {
   userId: ID!
   token: String!
   tokenExpiration: Int!
}
type Country {
  _id: ID!
  name: String!
  continent: String
  createdAt: String!
}
input UserInput{
  firstName: String!
  lastName: String!
  email:String!
  username: String!
  dob: String!
  password: String!
}

type RootQuery{
    userLogin(email: String!, password: String!): UserAuthToken!
    getCountries: [Country!] !
}
type RootMutation{
userRegistration(userInput: UserInput): User
addCountry(name: String!, continent: String!): Country!
deleteCountry(countryId: ID!): Country!
updateCountry(countryId: ID!, name:String!,continent:String!): Country!

}
schema {
  query: RootQuery
  mutation: RootMutation
}

`)