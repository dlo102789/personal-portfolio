import React from 'react'
import Layout from '../layout/Layout.js'
import './Projects.css'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Link,
  Button
} from '@mui/material'
const blog = require('./personal-blog.png')
const chatApp = require('./chat-app.png')
const portfolio = require('./portfolio.png')

const Projects = () => {
  return (
    <Layout>
      <Grid
        className='projectsBody'
        container
        spacing={2}
        alignItems='center'
        justifyContent='center'
        sx={{mt:6}} 
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{px:2, mb:3}}
        >
          <Typography variant='h4' align='center'>
            Explore some of the projects I've made.
          </Typography>
        </Grid>
        <Grid
          item
          align='center'
          xs={12}
          md={12}
        >
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '60%', 
              minHeight:500,
              mb:5,
              mt:3,
              px:1,
              pb:2,
              display: {xs:'none',md:'block'}
            }}
          >
            <CardHeader
              title='Personal Travel Blog'
              subheader='Written using Ruby on Rails'
            />
            <CardMedia
              component='img'
              height='600'
              image={blog}
            />
            <CardContent align='left'>
            Used Ruby on Rails to create a travel blog and learn the RoR framework.<br/>
            Implemented technologies such as Bootstrap, jQuery, Postgres, Heroku and Git<br/>
            <a href='http://derekandyvette.herokuapp.com/'>http://derekandyvette.herokuapp.com/</a>

            </CardContent>
              <CardActions>
                <Link href="https://github.com/dlo102789/rails_blog">
                  <Button
                    variant='contained'
                    className='blogButton'
                    sx={{
                      borderRadius: '16px',
                      backgroundColor: '#404040',
                      color: 'white',
                    }}
                  >
                    View Source Code
                  </Button>
              </Link>
            </CardActions>
          </Card>
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '90%', 
              minHeight: 580,
              mb:5,
              mt:3,
              px:1,
              pb:2,
              display: {xs:'block',md:'none'}
            }}
          >
            <CardHeader
              title='Personal Travel Blog'
              subheader='Written using Ruby on Rails'
            />
            <CardMedia
              component='img'
              height='300'
              image={blog}
            />
            <CardContent align='left'>
            Used Ruby on Rails to create a travel blog and learn the RoR framework.<br/>
            Implemented technologies such as Bootstrap, jQuery, Postgres, Heroku and Git<br/>
            <a href='http://derekandyvette.herokuapp.com/'>http://derekandyvette.herokuapp.com/</a>

            </CardContent>
              <CardActions>
                <Link href="https://github.com/dlo102789/rails_blog">
                  <Button
                    variant='contained'
                    className='blogButton'
                    sx={{
                      borderRadius: '16px',
                      backgroundColor: '#404040',
                      color: 'white',
                    }}
                  >
                    View Source Code
                  </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid
          item
          xs={12}
          md={12}
          align='center'
        >
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '60%', 
              minHeight: 500,
              mb:5,
              mt:3,
              px:1,
              pb:2,
              display:{xs:'none', md: 'block'}
            }}
          >
            <CardHeader
              title='Simple Chat App'
              subheader='NodeJS app built using Socket.io'
            />
            <CardMedia
              component='img'
              height='570'
              image={chatApp}
            />
            <CardContent align='left'>
              A simple chat app using NodeJS, Express, and Socket.io.<br/><br/>
              Features to be implemented:
              <ul>
                <li>Better UI</li>
                <li>Persistent messages</li>
                <li>Separate chat rooms</li>
                <li>User accounts</li>
              </ul>
            </CardContent>
            <CardActions>
              <Link href="https://github.com/dlo102789/Bleep">
                <Button
                  variant='contained'
                  className='chatButton'
                  sx={{
                    borderRadius: '16px',
                    backgroundColor: '#404040',
                    color: 'white',
                  }}
                >
                  View Source Code
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '90%', 
              minHeight: 520,
              mb:5,
              mt:3,
              p:1,
              display: {xs: 'block', md: 'none'}
            }}
          >
            <CardHeader
              title='Simple Chat App'
              subheader='NodeJS app built using Socket.io'
            />
            <CardMedia
              component='img'
              height='300'
              image={chatApp}
            />
            <CardContent align='left'>
              A simple chat app using NodeJS, Express, and Socket.io.<br/><br/>
              Features to be implemented:
              <ul>
                <li>Better UI</li>
                <li>Persistent messages</li>
                <li>Separate chat rooms</li>
                <li>User accounts</li>
              </ul>
            </CardContent>
            <CardActions>
              <Link href="https://github.com/dlo102789/Bleep">
                <Button
                  variant='contained'
                  className='chatButton'
                  sx={{
                    borderRadius: '16px',
                    backgroundColor: '#404040',
                    color: 'white',
                  }}
                >
                  View Source Code
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          align='center'
        >
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '60%', 
              minHeight: 500,
              mb:5,
              mt:3,
              px:1,
              pb:2,
              display:{xs:'none', md: 'block'}
            }}
          >
            <CardHeader
              title='This Site!'
              subheader='This site is a portfolio built on ReactJS'
            />
            <CardMedia
              component='img'
              height='570'
              image={portfolio}
            />
            <CardContent align='left'>
              This portfolio was built using NodeJS, ReactJS and was
              hosted on Heroku. MUI was used for styling.
            </CardContent>
            <CardActions>
              <Link href="https://github.com/dlo102789/personal-portfolio">
                <Button
                  variant='contained'
                  className='portfolioButton'
                  sx={{
                    borderRadius: '16px',
                    backgroundColor: '#404040',
                    color: 'white',
                  }}
                >
                  View Source Code
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card
            elevation={5}
            sx={{
              backgroundColor:'white', 
              width: '90%', 
              minHeight: 520,
              mb:5,
              mt:3,
              p:1,
              display: {xs: 'block', md: 'none'}
            }}
          >
            <CardHeader
              title='This Site!'
              subheader='This site is a portfolio built on ReactJS'
            />
            <CardMedia
              component='img'
              height='300'
              image={chatApp}
            />
            <CardContent align='left'>
              This portfolio was built using NodeJS, ReactJS and was
              hosted on Heroku. MUI was used for styling.
            </CardContent>
            <CardActions>
              <Link href="https://github.com/dlo102789/personal-portfolio">
                <Button
                  variant='contained'
                  className='portfolioButton'
                  sx={{
                    borderRadius: '16px',
                    backgroundColor: '#404040',
                    color: 'white',
                  }}
                >
                  View Source Code
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Projects