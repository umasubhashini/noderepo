const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  owner: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  link: { type: String },
  timings: { type: String },
  about: { type: String },
  quickInfo: { type: String },
  rating : {type : mongoose.Types.Decimal128,default : 0 },
  sliderImages: { type: [String] }, // Assuming slider images are URLs
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;