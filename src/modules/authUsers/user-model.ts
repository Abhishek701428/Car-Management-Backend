import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


export const User = mongoose.model<IUser>('User', UserSchema);
