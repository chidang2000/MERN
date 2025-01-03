import User from '../models/authModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

let refreshTokens = [];
const AuthController = {
    genneralAccessToken: (user) => {
        return jwt.sign(
            {
                id: user._id,
                isAdmid: user.isAdmin,
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: '30s' }
        );
    },
    genneralRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user._id,
                isAdmid: user.isAdmin,
            },
            process.env.REFRESH_TOKEN,
            { expiresIn: '365d' }
        );
    },
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const checkEmail = await User.findOne({ email: req.body.email });
            const checkUsername = await User.findOne({ username: req.body.username });
            if (checkEmail !== null) {
                return res.status(404).json('Email  already exists!');
            }
            if (checkUsername !== null) {
                return res.status(404).json('Username already exists!');
            }

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hashed,
            });

            const saveUser = await newUser.save();
            return res.status(200).json(saveUser);
        } catch (err) {
            res.status(404).json(err);
        }
    },
    //[POST] /auth/login
    login: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json(' User is not valid...');
            }
            const decodePassword = await bcrypt.compare(req.body.password, user.password);
            if (!decodePassword) {
                return res.status(404).json('Wrong Password');
            }
            if (user && decodePassword) {
                const accessToken = AuthController.genneralAccessToken(user);
                const refreshToken = AuthController.genneralRefreshToken(user);
                refreshTokens.push(refreshToken);

                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'Strict',
                });
                const { password, ...others } = user._doc; //lay tat ca trong user tru password

                res.status(200).json({ ...others, accessToken });
            }
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    refreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json('You are not authenticated');

        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json('Refresh token is not valid');
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
            if (err) {
                console.log(err);
            }

            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            const newAccessToken = AuthController.genneralAccessToken(user);
            const newRefreshToken = AuthController.genneralRefreshToken(user);
            refreshTokens.push(newRefreshToken);

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'Strict',
            });

            res.status(200).json({ accessToken: newAccessToken });
        });
    },
};

export default AuthController;
