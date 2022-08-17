import { Box, Button, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { ChangeEvent, useState, useContext, FC } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { EntryStatus } from "../../interfaces";


interface Props {
    type: EntryStatus;
}


export const NewEntry:FC<Props> = ({ type }) => {

    const { addNewEntry } = useContext(EntriesContext);

    const [isAdding, setIsAdding] = useState(false);
    const [touched, setTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return;

        addNewEntry( inputValue, type );
        
        setTouched(false);
        setInputValue('');
        setIsAdding(false);
    }


    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>
            {
                ( isAdding ) ?
                <>
                    <TextField 
                        fullWidth
                        sx={{marginTop: 2, marginBottom: 1}}
                        placeholder="New Entry"
                        autoFocus
                        multiline
                        label="New Entry"
                        helperText={inputValue.length <= 0 && "Write your entry here"}
                        name="entry"
                        value={inputValue}
                        onChange={handleTextChange}
                        error={ inputValue.length <= 0 && touched }
                        onBlur={() => setTouched(true)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant="contained" 
                            color="primary"
                            endIcon={<SaveIcon />}
                            onClick={onSave}
                        >
                            Save
                        </Button>

                        <Button 
                            variant="contained"
                            onClick={() => setIsAdding(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                </>  :
                <Button
                    startIcon={<AddCircleOutlineOutlined />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAdding(true)}
                >
                    Add Task
                </Button>
            }



        </Box>
    )
}
