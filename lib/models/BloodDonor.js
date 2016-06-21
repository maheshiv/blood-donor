import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import ENV from '../../env';

const Schema = mongoose.Schema;
const BloodDonor = new Schema({
  createdAt: {type: Date, default: Date.now},
  firstName: {type: String},
  lastName: {type: String},
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return isEmail(v);
      },
      message: '{VALUE} is not a valid email address!'
    },
    required: [true, 'User email id required']
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /^((?:00|\+)[\d]{2})(\s?)([\d]{3})(\s?)(([\d]{4}))(\s?)(([\d]{3}))$/.test(v);
      },
      message: '{VALUE} is not a valid phone number!, format +XX XXX XXXX XXX or 00XX XXX XXXX XXX'
    },
    required: [true, 'User phone number required']
  },
  bloodGroup: {type: String, minLength: 2, maxLength: 3},
  location: {
    type: [Number], //[longitude, latitude]
    index: '2d'
  },
  // longitude: {type: Number, required: true},
  // latitude: {type: Number, required: true},
  address: {type: String},
  userIP: {type: String, required: true}
}, {
  toJSON: { virtuals: true }
});

BloodDonor.virtual('longitude').get(function() {
  if (this.location)
    return this.location[0];
  else
    return 0;
});
BloodDonor.virtual('latitude').get(function() {
  if (this.location)
    return this.location[1];
  else
    return 0;
});
export default mongoose.model('BloodDonor', BloodDonor);
