import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC } from "react";
import { Entry } from "../../interfaces"

interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props> = ({ entry }) => {

    return (
        <Card
            sx={{marginBottom: 1}}
            // Eventos de drag
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace: 'pre-line'}}>{ entry.description }</Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                    <Typography variant='body2'>Hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
