const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./db/connect");

const { MONGO_URL, PORT } = require("./config/serverConfig");
const authenticationRoute = require("./routes/authenticationRoute");
const uploadImageRoute= require("./routes/uploadImageRoute");
const getImageRoute =require("./routes/getImageRoute")

app.use(cors());
app.use(express.json());
app.use("/api", authenticationRoute);
app.use("/api", uploadImageRoute);
app.use('/api',getImageRoute)

async function serverStart() {
  try {
    await connectDB(MONGO_URL);
    console.log('database connected')
    app.listen(PORT, () => {
      console.log("server is running");
    });
  } catch (error) {
    console.log('error, because didnt connect database');
    
  }
}

serverStart();
