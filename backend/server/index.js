const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./db/connect");

const { MONGO_URL, PORT } = require("./config/serverConfig");
const authenticationRoute = require("./routes/authenticationRoute");

app.use(cors());
app.use(express.json());
app.use("/api", authenticationRoute);

async function serverStart() {
  try {
    await connectDB(MONGO_URL);
    console.log('database connected')
    app.listen(PORT, () => {
      console.log("server is running");
    });
  } catch (error) {
    console.log('error, because you didnt connect database');
    
  }
}

serverStart();
