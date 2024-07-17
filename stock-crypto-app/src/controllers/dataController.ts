import { Request, Response } from 'express';
import Stock from '../models/Stock';
import Crypto from '../models/Crypto';
import dbConnect from '../utils/db';

export const getStocks = async (req: Request, res: Response) => {
  await dbConnect();
  const stocks = await Stock.find({}).sort({ timestamp: -1 }).limit(20);
  res.status(200).json(stocks);
};

export const getCrypto = async (req: Request, res: Response) => {
  await dbConnect();
  const crypto = await Crypto.find({}).sort({ timestamp: -1 }).limit(20);
  res.status(200).json(crypto);
};
