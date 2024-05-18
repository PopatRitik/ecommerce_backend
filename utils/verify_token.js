import jwt from 'jsonwebtoken';

const verify = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        res.status(401).send({ error: "you are not authenticated!" })
    }
    else {
        jwt.verify(token, "qwertyuioplkjhgfdsazxcvbn", (err, user) => {
            if (err) {
                res.status(401).send({ error: "invalid token!" })
            }
            else {
                req.user = user
                next()
            }
        })
    }
}

export default verify;