import { formatDistanceToNow } from 'date-fns'

export const getFormatDistanteToNow = ( date:number ) => {
    const fromNow = formatDistanceToNow(date);

    return fromNow
}