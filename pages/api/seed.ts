import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";

type Data = {
    msg: string
}


export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    if( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({msg: 'No tiene acceso a este servicio'});
    }
    await db.connect();
    
    await db.disconnect();

    res.status(200).json({msg: 'Proceso realizado correctamente'})
}