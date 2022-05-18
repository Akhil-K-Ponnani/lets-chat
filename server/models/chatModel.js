import mongoose from 'mongoose';

const chatSchema = mongoose.Schema(
    {
        name: { type: String, trim: true },
        isGroup: { type: Boolean, default: false },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
        groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Chat', chatSchema);