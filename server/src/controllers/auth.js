const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../domain/users')

const login = async (req, res) => {
    console.log('logging in...');
    const { email, password } = req.body;
    console.log('req.body', req.body);

    const lowerCaseEmail = email.toLowerCase();
    console.log('lower case email', lowerCaseEmail);

    if (!email || !password) {
        return res.status(400).json({
            message: `Missing fields`
        })
    }

    try {
        const existingUser = await findUserByEmail(lowerCaseEmail)
        console.log('existing user', existingUser);

        if(!existingUser) {
            return res.status(400).json({
                message: `User with email ${lowerCaseEmail} not found`
            })
        }

    } catch (error) {
        //
        return res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    login
}