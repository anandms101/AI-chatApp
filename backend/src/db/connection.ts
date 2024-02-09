// importing connect and disconnect from mongoose
import { connect, disconnect } from 'mongoose';

// function to connect to the database
async function connectToDatabase() {
    try{
        await connect(process.env.MONGODB_URL as string);
    }catch(err){
        console.error('Error connecting to the database', err);
        throw new Error('Error connecting to the database');
    }
}

// function to disconnect from the database
async function disconnectFromDatabase() {
    try{
        await disconnect();
    }catch(err){
        console.error('Error disconnecting from the database', err);
        throw new Error('Error disconnecting from the database');
    }
}

export { connectToDatabase, disconnectFromDatabase };