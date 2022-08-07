const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(
      "mongodb+srv://vijay:admin123@cluster0.ywcvu.mongodb.net/?retryWrites=true&w=majority",
      //   process.env.MONGO_URI
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
