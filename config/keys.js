require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URL,
  secretOrKey: process.env.MONGO_PASS
};
