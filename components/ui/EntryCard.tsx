import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces"
import { dateFunctions } from "../../utils";

interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props> = ({ entry }) => {

    const { setIsDragging } = useContext(UIContext)
    const router = useRouter();

    const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        event.dataTransfer.setData('text', entry._id);
        setIsDragging( true );
    }

    const onDragEnd = ( event: DragEvent<HTMLDivElement> ) => {
        setIsDragging( false );
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }
 
    return (
        <Card
            onClick={onClick}
            sx={{marginBottom: 1}}
            // Eventos de drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace: 'pre-line'}}>{ entry.description }</Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                    <Typography variant='body2'>
                        { dateFunctions.getFormatDistanteToNow(entry.createAt) }
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
