import userResolver from './userResolver'
import countryResolver from './countryResolver'

const rootResolver = {
  ...userResolver,
  ...countryResolver
};

module.exports = rootResolver;