import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const countrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  continent: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Country = mongoose.model('Country', countrySchema);
export default Country;