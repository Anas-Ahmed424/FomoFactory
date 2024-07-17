import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Stock', stockSchema);
