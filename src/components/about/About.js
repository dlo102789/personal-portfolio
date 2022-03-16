import React from 'react'
import {
  Grid,
  Typography,
  Stack,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Paper
} from '@mui/material'
import Layout from '../layout/Layout'
import './About.css'
const uis = require('./uis.jpg')
const fk = require('./fresenius-kabi.jpg')
const hiking = require('./hiking.jpg')

const About = () => {


  return (
    <Layout>
      <Grid
        className='aboutBody'
        container
        spacing={1}
        //justifyContent='space-around'
        alignItems='center'
        sx={{mt:6}} 
      >
        <Grid item xs={12} md={6}>
          <Stack alignItems='center'>
            <Image />
            <Text />
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Card sx={{backgroundColor:'white', minWidth:275, minHeight:300}}>
            <CardContent>
              <Typography align='center' variant='h5'>Who Am I?</Typography>
              <Typography sx={{mt:2}} variant='subtitle1'>
                Security+ certified IT Web Systems Administrator with an MS in Computer 
                Science and two years of experience in a pharmaceutical IT environment.
                I am passionate about problem solving, finding new opportunities 
                to improve myself and discovering new technologies. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Paper 
          elevation={3} 
          align='center'
          justifyContent='center'
          //alignItems='center'
          className='learnPaper'
          component={Grid}
          container
          item
          spacing={3}
          sx={{
            backgroundColor: '#5bb2b5', 
            width:'100%', 
            minHeight:500,
            mt:6,
            ml:1,
            pb:3,
          }}
        >
          <Grid item xs={12} md={12}>
            <Typography 
              align='center'
              variant='h5'
              sx={{mt:2, color:'white'}}
            >
              Learn More About Me
            </Typography>
          </Grid>
          <Grid 
            item
            xs={12}
            md={4}
          >
            <Card
              elevation={5}
              sx={{
              backgroundColor:'white', 
              maxWidth: 345, 
              height: 500,
              mb:3,
              }}
            >
              <CardHeader title='I went to...' 
                sx={{backgroundColor: '#6c918d', color: 'white'}}
              />
              <CardMedia 
                component='img'
                height='220'
                image={uis}
              />
              <CardContent>
                <Typography variant='subtitle1'>
                  The University of Illinois at Springfield - some courses
                  covered include: Operating Systems, Parallel Programming,
                  Software Engineering, Advanced Database Design, Software
                  Security. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Card
              elevation={5}
              sx={{
              backgroundColor:'white', 
              maxWidth: 345,
              height: 500, 
              mb:3,
              }}
            >
              <CardHeader title='I currently work at...' 
                sx={{backgroundColor: '#6c918d', color: 'white'}}
              />
              <CardMedia 
                component='img'
                height='220'
                image={fk}
              />
              <CardContent>
                <Typography variant='subtitle1'>
                  Fresenius Kabi. As an IT web systems administrator, I
                  oversee system implementations from start to finish.
                  That includes preparing virtual environments, performing
                  system installations and configuration, and providing
                  post-go-live support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid 
            item
            xs={12}
            md={4}
          >
            <Card
              elevation={5}
              sx={{
              backgroundColor:'white', 
              maxWidth: 345, 
              height: 500,
              mb:3,
              }}
            >
              <CardHeader title='I like to...' 
                sx={{backgroundColor: '#6c918d', color: 'white'}}
              />
              <CardMedia 
                component='img'
                height='220'
                image={hiking}
              />
              <CardContent>
                <Typography variant='subtitle1'>
                  In my free time, I enjoy building PC's, dabbling in 
                  video game development, as well as all things outdoors
                  such as hiking, backpacking and biking.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Paper>
        <Paper
          elevation={3} 
          align='center'
          justifyContent='center'
          //alignItems='center'
          className='learnPaper'
          component={Grid}
          container
          item
          spacing={3}
          sx={{
            backgroundColor: '#5bb2b5', 
            width:'100%', 
            minHeight:400,
            mt:10,
            ml:1,
            pb:3,
          }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant='h5' align='center'
              sx={{mt:2, color:'white'}}
            >
              Skills
            </Typography>
          </Grid>
          <Card
            component={Grid}
            align='left'
            item
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '80%', 
              height: 220,
              mb:3,
              mt:3
            }}
          >
            <CardContent>
              <u>Administration</u>: Windows Server Administration,
              Linux Server Administration, TrackWise Administration 
              Active Directory, Tomcat, IIS, PowerShell scripting, SQL
              <br/><br/>
              <u>Programming</u>: HTML, CSS, JavaScript, NodeJS, 
              ReactJS, ExpressJS, jQuery, Ruby, Ruby on Rails, C#
              <br/><br/>
              <u>Technologies/Tools</u>: Socket.io, git, Heroku, MUI, PostMan, 
              KeyStore Explorer
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Layout>
  )
}

const Image = () => {
  return (
    <img 
      style={{
        marginBottom: '20px'
      }}
      src={require('../Linkedin_image-modified.png')} 
      width='200'
      alt='LinkedIn'
    />
  )
}

const Text = () => {
  return (
    <>
      <Typography variant='h4'>Derek Lo</Typography>
      <Typography 
        variant='subtitle1'
        color='text.secondary'
      >
        Aspiring Software Engineer
      </Typography>
    </>
  )
}
export default About