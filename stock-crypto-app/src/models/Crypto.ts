import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Crypto', cryptoSchema);
