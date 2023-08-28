const connectDB = require("./DB/connectDB");
const DataModel = require("./Model/Model");
const jsonData = require("./data.json");

require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // DataModel.deleteMany();
    await DataModel.create(jsonData)
      .then(() => console.log("data created success"))
      .catch((err) => console.log("data creation failed", err));
    // console.log("Data Creation Success !!");
    process.exit(0);
  } catch (error) {
    console.log("Data Creation Failed !!");
    console.log(error);
    process.exit(1);
  }
};

start();
