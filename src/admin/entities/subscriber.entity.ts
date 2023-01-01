import * as mongoose from 'mongoose';

export enum SubDuration {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  HALFYEARLY = 'half_yearly',
}

export interface ISubscriber {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  durationOfSubscribtion: SubDuration;
  subExpirationDate: Date;
}

export const SubscriberSchema = new mongoose.Schema<ISubscriber>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    durationOfSubscribtion: {
      type: String,
    },
    subExpirationDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);
