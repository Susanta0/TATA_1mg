const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Assuming you have a model for storing blacklisted tokens
const userModel = require("../../models/users.Shema");
const blacklistModel = require("../../models/blackList.model");
const userRouter = Router();
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

// Register a new user
userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already registered" });
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    return res.status(400).json({ message: "Something went wrong" });
                }
                const userDetails = new userModel({ name, email, password: hash });
                await userDetails.save();
                return res.status(201).json({ message: "User registered successfully" });
            });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// User login
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not registered" });
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const accessToken = jwt.sign({ userId: user._id, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
                    const refreshToken = jwt.sign({ userId: user._id, name: user.name }, SECRET_KEY, { expiresIn: '5min' });
                    return res.status(201).json({ message: "User login successful", access_Token: accessToken, refresh_Token: refreshToken });
                } else {
                    return res.status(400).json({ message: "Wrong password" });
                }
            });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

// User logout
userRouter.get("/logout", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        if (!token) {
            return res.status(401).json("Token is required.");
        }
        const userToken = new blacklistModel({ token: token });
        await userToken.save();
        return res.status(201).json("User logout successful");
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = userRouter;
