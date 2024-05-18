import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = async (req, res, next) => {
    try {
        let salt = bcrypt.genSaltSync(10)
        let hash_password = bcrypt.hashSync(req.body.password, salt)
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash_password
        })
        await user.save()
        res.send({ name: req.body.name, email: req.body.email })
    } catch (error) {
        next()
    }
}

const login = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(404).send({ error: "user not found" })
        }
        let is_valid = bcrypt.compare(req.body.password, user.password)
        if (!is_valid) {
            res.status(400).send({ error: "wrong password" })
        }
        let token = jwt.sign({ user_id: user._id }, "qwertyuioplkjhgfdsazxcvbn")
        res.cookie("access_token", token, { httpOnly: true }).send({ _id: user._id, email: user.email })
    } catch (error) {
        console.log(error)
        next()
    }
}

export { register, login };