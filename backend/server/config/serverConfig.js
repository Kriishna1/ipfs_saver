require('dotenv').config()

module.exports={
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT|| 3000,
    JWT_SECRETKEY:process.env.JWT_SECRETKEY,
    PINATA_APIKEY:process.env.PINATA_APIKEY,

    PINATA_SECRETKEY:process.env.PINATA_SECRETKEY

}