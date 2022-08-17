import { List, Paper } from "@mui/material"
import { EntryCard } from './';

export const EntryList = () => {
    
    return (
        // TODO: TO DO DROP
        <div>
            <Paper sx={{height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px'}}>
                {/* TODO: cambiar a dependiendo si estoy haciendo drap o no */}
                <List sx={{opacacity: 1}}>
                   <EntryCard />
                </List>
            </Paper>
        </div>    
    )
}
