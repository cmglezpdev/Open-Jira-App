import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';

export function middleware ( req: NextRequest, ev:NextFetchEvent ) {

    // TODO: Learn how to extract dates of the url of the req
    const parts = req.url.split('/');
    const id = parts[ parts.length - 1 ];

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    if( !checkMongoIDRegExp.test(id) )
        return new Response(JSON.stringify({ message: 'The id is not valid' + id }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        })

    return NextResponse.next()
}
 
export const config = {
    matcher: '/api/entries/:id',
  }