
/**
 * Try to login you into
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function login(req, res, next) {
  res.json({ message: "Login" })
}

/**
 * Create a new user -
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function register(req, res, next) {
  res.json({ message: "Login" })
}


function resetPassword(req, res, next) {
  res.json({ message: "Reset password" })
}

// -------------------------------------------
function findAll(req, res, next) {
  res.json({ message: "find All" })
}

function findOne(req, res, next) {
  res.json({ message: "find one" })
}

// ------------------------------------------

function updateUser (req, res, next) {
  res.json({ message: "update user by id"})
}

function deleteUser (req, res, next) {
  res.json({ message: "delete user by id" })
}

module.exports = { login, register, resetPassword, findAll, findOne, updateUser, deleteUser }