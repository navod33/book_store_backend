import bcrypt from 'bcrypt';
import { User } from '../models/userModel.js';

 const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = await User.create({ username, email, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

 const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // If password is correct, return some user data or a token
    return res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


export default { registerUser, loginUser };