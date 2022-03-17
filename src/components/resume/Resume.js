import React from 'react'
import Layout from '../layout/Layout'
import {
  Grid, 
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material'
import {Download as DownloadIcon} from '@mui/icons-material'
import { Document, Page} from 'react-pdf';
import ResumePDF from './DerekLo_Resume.pdf'

const Resume = () => {

  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      window.open(ResumePDF)
    }
  }

  try {
    return (
      <Layout>
        <Grid
          container
          align='center'
          sx={{my: 5}}
        >
          <Grid
            container
            item
            xs={12}
            md={12}
            justifyContent='center'
          >
            <Grid
              item
            >
              <Card
                sx={{maxWidth: 700, backgroundColor:'grey'}}
                justifyItems='center'
                alignItems='center'
              >
                <CardActions>
                  <Button
                    align='center'
                    justify='center'
                    variant='contained'
                    onClick={handleDownload}
                    starticon={DownloadIcon}
                    sx={{borderRadius:'16px',
                    BackgroundColor: 'black',
                    color:'white',
                    maxWidth: 500,
                    p:2}}
                  >
                    Download my resume
                  </Button>
                </CardActions>
                <CardContent>
                  <Document file={ResumePDF}
                    options={{workersrc: '/pdf.worker.js'}}
                  >
                    <Page
                      renderTextLayer={false}
                      pageNumber={1}
                    />
                  </Document>
                </CardContent>
              </Card>
              
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    )
  }
  catch(e) {
    return(
    <>
      <Typography variant='h5'>
        Error
      </Typography>
      <Typography variant='subtitle1'>
        Try disabling adblock.
      </Typography>
    </>
    )
  }
}
export default Resume