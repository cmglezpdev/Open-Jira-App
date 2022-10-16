import { NextApiResponse, NextApiRequest } from 'next';
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
    | { message: string }
    | IEntry


export default function handler (req:NextApiRequest, res:NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return getEntry( req, res );
        case 'PUT':
            return putEntry(req, res);
        default:
            return res.status(400).json({message: 'Something is wrong'})
    }
}

const getEntry = async (req:NextApiRequest, res:NextApiResponse) => {
    const { id } = req.query;

    await db.connect();
    const entry = await Entry.findById(id);
    if( !entry ) {
        await db.disconnect();
        return res.status(400).json({ message: 'The entry does not exist' });
    }
    await db.disconnect();
    return res.status(200).json( entry );
}

const putEntry = async (req:NextApiRequest, res:NextApiResponse) => {
    const { id } = req.query;

    await db.connect();
    const entry = await Entry.findById(id);

    if( !entry ) {
        await db.disconnect();
        return res.status(400).json({ message: 'The entry with that id does not exist' })
    }

    const { 
        description = entry.description,
        status = entry.status
    } = req.body;

    try {
        const updateEntry = await Entry.findByIdAndUpdate(
            id, 
            { description, status }, 
            { runValidators: true, new: true }    
        )
        await db.disconnect();
        return res.status(200).json( updateEntry )
    
    } catch (error:any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message })  
    }
}