import mongoose from 'mongoose'


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://rekha:rekha123@cluster0.cclfy.mongodb.net/nags?retryWrites=true&w=majority' , { useUnifiedTopology: true , useNewUrlParser : true , useCreateIndex : true} , () => {
            console.log('MONGODB CONNECTED SUCCESSFULLY'.blue.bold.underline);
        })

    } catch(error) {
        throw new Error('DataBase Not connecting...');
    }
}

export default connectDb;