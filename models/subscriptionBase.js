const mongoose = require('mongoose');

const subscriptionBaseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
    required: true
  },
  tokenId: {
    type: String,
    required: true
  },
  listingId: {
    type: String,
    required: false
  },
  price:{
    type: String,
    required: false
  },
  isListed: {
    type: Boolean,
    required: true,
    default: false 
  }
});

const SubscriptionBase = mongoose.model('SubscriptionBase', subscriptionBaseSchema);

module.exports = SubscriptionBase;
