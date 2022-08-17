import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title='Home OpenJira'>
      <Grid container spacing={2}>
 
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title={"Pennding"} />
            <CardContent>
              {/* Add new task */}
              {/* List of entry */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title={"In Progress"}></CardHeader>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title={"Finished"}></CardHeader>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default Home
