import userResolver from './userResolver'
import countryResolver from './countryResolver'
import activityResolver from './activityResolver'

const rootResolver = {
  ...userResolver,
  ...countryResolver,
  ...activityResolver
};

module.exports = rootResolver;