require('dotenv').config()

module.exports={
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT|| 3000,
    // JWT_KEY:process.env.JWT_KEY

}