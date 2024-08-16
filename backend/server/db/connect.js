const mongoose=require('mongoose')

const  connectDB=(url)=>{
    console.log(url);
    
    return mongoose.connect(url);
    
}

module.exports={connectDB}