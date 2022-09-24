import mongoose from 'mongoose';

/*
 * 0 = disconnected
*  1 = connectedc
*  2 = connecting
*  3 = disconnecting 
 */



const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if( mongoConnection.isConnected === 1 ) {
        console.log("Ya estábamos conectados");
        return;
    }
    
    const db_cnn = process.env.DB_CNN;

    if( mongoose.connections.length > 0 ) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if( mongoConnection.isConnected === 1 ) {
            console.log('Usando coneccion anterior');
            return;
        }
        await mongoose.disconnect();
    }

    await mongoose.connect(db_cnn || '');
    mongoConnection.isConnected = 1;
    console.log("Contectado a mongodb", db_cnn);
}

export const disconnect = async() => {

    if( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    console.log("desconectado de mongodb");
}