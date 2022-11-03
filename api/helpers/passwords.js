const crypto = require("crypto");
const util = require("util");

const scrypt = util.promisify(crypto.scrypt);

const hashPassword = async (password) => {
    const salt = crypto.randomBytes(8).toString("hex");
    const bufHash = await scrypt(password, salt, 64);

    const newPass = `${bufHash.toString("hex")}.${salt}`;
    return newPass;
};

const comparePasswords = async (saved, supplied) => {
    const [hashed, salt] = saved.split(".");

    const hashedSupBuf = await scrypt(supplied, salt, 64);

    return hashedSupBuf.toString("hex") === hashed;
};

module.exports = { hashPassword, comparePasswords };
