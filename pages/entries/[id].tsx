import { useState, ChangeEvent, useMemo, FC, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { capitalize, Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from '../../components/layouts/Layout';
import { dbEntries } from '../../database';
import { Entry, EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';
import { dateFunctions } from '../../utils';

const validStatus:EntryStatus[] = ['pending', 'in-progress', 'finished']

interface Props {
    entry: Entry
}


const EntryPage:FC<Props> = ({ entry }) => {
    
    const router = useRouter();
    const { updateEntry } = useContext(EntriesContext)
    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus )
    }

    const onSave = () => {
        if( inputValue.trim().length === 0 ) return;
        const updatedEntry:Entry = {
            ...entry,
            status,
            description: inputValue,
        }

        updateEntry(updatedEntry, true)
        router.push('/')
    }

    return (
        <Layout title={inputValue.substring(0, 20).concat('...')}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Input: ${inputValue}`}
                            subheader={dateFunctions.getFormatDistanteToNow(entry.createAt)}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                onChange={onTextFieldChange}
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                helperText={isNotValid && 'Introduce a value'}
                                error={isNotValid}
                             />

                            <FormControl>
                                <FormLabel> Estado: </FormLabel>
                                <RadioGroup 
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={ capitalize(option) }
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<SaveOutlinedIcon />}
                                variant='contained'
                                fullWidth 
                                onClick={onSave}
                                disabled={inputValue.length<= 0}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
            <IconButton sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'red'
            }}>
                <DeleteOutlinedIcon />
            </IconButton>
        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async({ params }) => {

    const { id } = params as { id: string }
    
    const entry = await dbEntries.getEntryById( id );

    if( !entry ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}


export default EntryPage;