import { Box } from '@mui/system'
import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: React.ReactNode;
}

export const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>

        <Navbar />

        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>
    </Box>
  )
}
