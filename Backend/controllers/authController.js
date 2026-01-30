const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

// Signup
exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        // Hash password manually
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({ name, email, password: hashedPassword });

        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            message: 'Signup successful! Welcome to the app 👋',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        next(err);
    }
}

// Login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Compare password manually
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate token
        const token = generateToken(user._id);

        res.json({
            message: 'Login successful! Welcome back 👋',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        next(err);
    }
}
