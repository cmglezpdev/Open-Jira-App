import React, { useContext } from 'react'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts']


export const Sidebar = () => {
    
    const { sideMenuOpen, closeSideMenu } = useContext(UIContext)
    
    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={() => closeSideMenu()}
        >
            <Box sx={{ width: '250px' }}>
                <Box sx={{ padding: '5px 10px'}}>
                    <Typography variant='h4'>Menu</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItem button key={i}>
                                <ListItemIcon>
                                    { i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                                </ListItemIcon>    
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItem button key={i}>
                                <ListItemIcon>
                                    { i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                                </ListItemIcon>    
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List >
            </Box>
        </Drawer>
    )
}
