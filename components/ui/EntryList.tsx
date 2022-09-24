import { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material"
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;

}

export const EntryList:FC<Props> = ({ status }) => {
    
    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDraggingEntry, setIsDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() =>
        entries.filter(entry => entry.status === status)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [entries]);
    
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find(entry => entry._id === id)!;

        updateEntry({
            ...entry,
            status
        });

        setIsDragging(false);
    }

    const allowDrog = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }


    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrog}
            className={ isDraggingEntry ? styles.dragging : '' }
        >
            <Paper sx={{height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px'}}>
                
                <List sx={{opacity: isDraggingEntry ? 0.2 : 1, transition: 'all 0.3s'}}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard 
                                key={ entry._id }
                                entry={ entry }
                            />
                        ))
                    }
                </List>
            </Paper>
        </div>    
    )
}
