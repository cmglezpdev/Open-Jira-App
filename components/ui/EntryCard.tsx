import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

export const EntryCard = () => {

    return (
        <Card
            sx={{marginBotton: 1}}
            // Eventos de drag
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace: 'pre-line'}}>Esto es la descripcion</Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                    <Typography variant='body2'>Hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
