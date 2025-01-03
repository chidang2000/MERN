import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authSchema = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        isAdmin: { type: Boolean, default: false },
        accessToken: {
            type: String,
        },
        refreshToken: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('User', authSchema, 'user');
