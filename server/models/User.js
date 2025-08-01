import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        image: { type: String, required: true }
    }
)

export default mongoose.model('User', userSchema);