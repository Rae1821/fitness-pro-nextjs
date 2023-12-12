import { Schema, model, models } from 'mongoose';

const UserProfileInfo = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    weight: {
        type: Number,
        required: [true, "Weight is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    },
    waistMeasurement: {
        type: Number,
        required: [true, "Waist is required"],
    },
    hipMeasurement: {
        type: Number,
        required: [true, "hipMeasurement is required"],
    },
    bustMeasurement: {
        type: Number,
        required: [true, "Bust is required"],
    },
    notes: {
        type: String,
        required: [false, "Notes is not required"],
    }
});

const UserInfo = models.UserInfo || model('UserInfo', UserProfileInfo);

export default UserInfo;