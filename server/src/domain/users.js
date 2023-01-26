const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (email, password, firstName, lastName) =>
  prisma.user.create({
    data: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });

const findAllUsers = () => prisma.user.findMany({});

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  const findUserById = (userId) => prisma.user.findFirst({
    where: {
      id: userId
    }
  })

  const deleteUserById = (userId) => prisma.user.delete({
    where: {
      id: userId,
    }
  })

module.exports = {
  createUser,
  findAllUsers,
  findUserByEmail,
  findUserById,
  deleteUserById,
};
