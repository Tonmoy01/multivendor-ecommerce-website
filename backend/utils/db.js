const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Successfully connected our database!');
  } catch (error) {
    console.log(error.message);
  }
};
