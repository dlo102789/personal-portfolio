import React from 'react'
import { 
  Typography, 
  Button,
  Grid
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => {

  const style = {
    position: 'absolute',
    width: '100%',
    display: 'block',
    justifyContent: 'center',
    //top: 'auto',
    //bottom: 0,
    mt: '100vh',
    backgroundColor: '#5bb2b5',
    color: 'white',
  }

  const redirectGitHub = () => {
    if (typeof window !== "undefined") {
      window.open("https://github.com/dlo102789");
    }
  }

  const redirectLinkedIn = () => {
    if (typeof window !== "undefined") {
      window.open("https://linkedin.com/in/dereklo89")
    }
  }

  const redirectEmail = () => {
    if (typeof window !== "undefined") {
      window.open("mailto:dlo102789@gmail.com", "_self");
    }
  };


  return (
    // <AppBar 
    //   position='fixed' 
    //   sx={{top: 'auto', bottom: 0}}
    // >
    //   <Container maxWidth='xl' >
        
    //   </Container>
    // </AppBar> 
    <footer style={style}>
      <Grid
        container
        spacing={0}
        direction='column'
        justifyContent="center"
        alignItems="center"
        sx={{top: 'auto', bottom: 0, }}
      >
        <Grid item justify="center">
          <Typography
          variant='h6'
          noWrap
          component='div'
          align='center'
          sx={{flexGrow: 1}}
          >
            Connect with me.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={0}
            direction='row'
            justify='center'
            align='center'
          >
            <Grid item
              sx={{display: {xs: 'none', md:'flex'}}}
            >
              <Button
                startIcon={<GitHubIcon />}
                key='github' 
                onClick={redirectGitHub}
                sx={{my: 2,mr: 2, color: 'white', 
                display: 'inline-flex', borderColor: 'white' }}
              >
                GitHub
              </Button>
            </Grid>
            <Grid item
              sx={{display: {xs: 'none', md:'flex'}}}
            >
              <Button
                startIcon={<LinkedInIcon />}
                key='linkedin' 
                onClick={redirectLinkedIn}
                sx={{my: 2,mr: 2, color: 'white', display: 'inline-flex', borderColor: 'white' }}
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item
              sx={{display: {xs: 'none', md:'flex'}}}
            >
              <Button
                startIcon={<EmailIcon />}
                key='email' 
                onClick={redirectEmail}
                sx={{my: 2,mr: 2, color: 'white', display: 'inline-flex', borderColor: 'white' }}
              >
                Email
              </Button>
            </Grid>
            <Grid item
              sx={{display: {xs: 'flex', md:'none'}}}
            >
              <Button
                startIcon={<GitHubIcon fontSize='large'/>}
                key='github' 
                onClick={redirectGitHub}
                sx={{my: 2,mr: 2, color: 'white', 
                display: 'inline-flex', borderColor: 'white' }}
              >
              </Button>
            </Grid>
            <Grid item
              sx={{display: {xs: 'flex', md:'none'}}}
            >
              <Button
                startIcon={<LinkedInIcon fontSize='large' />}
                key='linkedin' 
                onClick={redirectLinkedIn}
                sx={{my: 2,mr: 2, color: 'white', display: 'inline-flex', borderColor: 'white' }}
              >
              </Button>
            </Grid>
            <Grid item
              sx={{display: {xs: 'flex', md:'none'}}}
            >
              <Button
                startIcon={<EmailIcon fontSize='large' />}
                key='email' 
                onClick={redirectEmail}
                sx={{my: 2,mr: 2, color: 'white', display: 'inline-flex', borderColor: 'white' }}
              >
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
export default Footer