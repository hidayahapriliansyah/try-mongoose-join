import User from '../models/User.js';

const user_get = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'ok',
      message: 'Get all users',
      data: users,
    });
  } catch (err){
    console.log(err);
  };
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
  };
};

export {
  user_get,
  user_post,
};
