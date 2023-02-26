import Invitation from '../models/Invitation.js';

const invitation_get = async (req, res) => {
  try {
    const invitations = await Invitation.find()
      .populate('inviter')
      .populate('invitee');
    res.status(200).json({ status: 'ok', message: 'Get all invitations', data: invitations });
  } catch (err) {
    console.log(err);
  }
};

const invitation_post = async (req, res) => {
  const payload = req.body;

  try {
    const invitation = await Invitation.create(payload);
    res.status(201).json({ status: 'ok', message: 'Invitation is created', data: invitation });
  } catch (err) { 
    console.log(err);
  };
};

export {
  invitation_get,
  invitation_post,
};
