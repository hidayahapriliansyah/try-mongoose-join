import User from '../models/User.js';

const user_get = (req, res) => {
  res.send('User get');
};

const user_post = async (req, res) => {
  const payload = req.body;

  try {
    const user = await User.create(payload);
    res.status(200).json({
      status: 'ok',
      message: 'User have created',
      data: {
        user: user._id
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export {
  user_get,
  user_post,
};
