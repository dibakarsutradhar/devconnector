require("dotenv").config();

module.exports = {
  mongoURI: process.env.REACT_APP_MONGO_URL,
  secretOrKey: process.env.REACT_APP_MONGO_PASS
};
