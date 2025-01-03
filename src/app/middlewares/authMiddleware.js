import jwt from 'jsonwebtoken';
import dotevn from 'dotenv';
dotevn.config();

const authMiddleware = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            //Bearer token ( dung split de bo Bearer chi lay token)
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
                if (err) {
                    return res.status(403).json('Token is not valid');
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json('Ban Chua Dang Nhap');
        }
    },
};

export default authMiddleware;
