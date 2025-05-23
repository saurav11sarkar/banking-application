import { Document, Types } from "mongoose";

export interface IFixDeposit extends Document {
  user: Types.ObjectId;
  account: Types.ObjectId;
  apply_for: string;
  amount: number;
  isClaimed: boolean;
  interestRate: number;
  interest_amount: number;
  claimed_date?: Date;
  total_amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}
