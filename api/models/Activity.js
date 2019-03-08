import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const activitySchema = new Schema({
  activityType: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
});

const Country = mongoose.model('Activity', activitySchema);
export default Country;