import {connect,disconnect} from 'mongoose'

async function connectDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('connected to the database')
    } catch (error) {
        console.log(error)
    }
}
async function disconnectFromDB() {
    try {
        await disconnect()
        console.log('disconnected from the database')
    } catch (error) {
        console.log(error)
    }
}
export  {connectDatabase,disconnectFromDB}


