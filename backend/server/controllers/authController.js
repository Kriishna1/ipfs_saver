
const ethers =require('ethers')

const UserModel=require('../models/User')

async function authController(req,res,next){
    try {    
        const {signature}=req.body;
        const {address} =req.query;
    if(!signature){
        throw new Error("Signature is invalid")
    }
    const recoveredAddress=ethers.utils.verifyMessage("Welcome to Project k ",signature)
    // console.log(recoveredAddress);

    if (address.toLowerCase()===recoveredAddress.toLowerCase()){


        const address=recoveredAddress.toLowerCase();
        const user= await UserModel.findOne({userAddress:address})
        if(!user){

          const userData= await UserModel.create({userAddress:address})
          console.log(userData)
          console.log('pointer here')
        }

        res.status(200).json ({message:"Authentication Succesfull"})
      
    }
    else{
        res.status(400).json ({message:"Authentication Fail"})
    }
   
}
catch(error){
    res.status(500).json({message:"internal server error"})
}}

module.exports={authController}