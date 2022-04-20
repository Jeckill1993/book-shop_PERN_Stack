const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket, Type} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' },
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role, firstname, lastname, phone } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        }

        const candidate = await User.findOne({ where: { email } });
        if(candidate) {
            return next(ApiError.badRequest('User with the email is already exist'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword, firstname, lastname, phone });
        const basket = await Basket.create({ userId: user.id });

        const token = generateJwt(user.id, user.email, user.role, user.firstname, user.lastname, user.phone);

        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.badRequest("User with the email isn't exist"));
        }

        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest("The password is incorrect"));
        }

        const token = generateJwt(user.id, user.email, user.role, user.firstname, user.lastname, user.phone);
        return res.json({ token });
    }

    async checkAuth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role,
            req.user.firstname, req.user.lastname, req.user.phone);
        res.json({ token });
    }

    async update(req, res, next) {
        const { id, email, password, role, firstname, lastname, phone } = req.body;

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.update({ email, role, password: hashPassword, firstname, lastname, phone },
            { where: { id } });

        const token = generateJwt(user.id, user.email, user.role, user.firstname, user.lastname, user.phone);

        return res.json({ token });
    }

    async delete(req, res) {
        const { id } = req.params;
        const user = await User.destroy({ where: { id } });

        res.json({ user });
    }
}

module.exports = new UserController();