import mongoose from 'mongoose';

const invitationSchema = new mongoose.Schema({
  inviter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  invitee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  status: {
    type: String,
    default: 'pending',
  },
}, { timestamps: true });

const Invitation = mongoose.model('invitation', invitationSchema);

export default Invitation;
