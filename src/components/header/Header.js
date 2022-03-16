import React from 'react'
import {
  AppBar, 
  Container, 
  Toolbar,
  Typography,
  Menu, 
  Button,
  Box,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Link
} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import PersonIcon from '@mui/icons-material/Person'
import BuildIcon from '@mui/icons-material/Build'
import AssignmentIcon from '@mui/icons-material/Assignment'
import {Link as RouterLink} from 'react-router-dom'


const pages = [
  'About Me', 
  'Projects', 
  'Resume'
]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null)
  }

  return (
    <AppBar 
      position="static"
      sx={{backgroundColor: '#5bb2b5'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
          variant="h6"
          noWrap
          component="div"
          sx={{mr:2, display: {xs: 'none', md: 'flex'} }}
          >
            DL
          </Typography>
          
          <Box sx={{flexGrow:1, display: {xs: 'flex', md: 'none'} }}>
            <IconButton
              size='large'
              aria-label='mobile menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              >
                <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
              <MenuItem
                key={pages[0]}
                //onClick={handleCloseNavMenu}
                component={Link}
                to='/'
              >
                <ListItemIcon>
                  <PersonIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>About Me</ListItemText>
              </MenuItem> 
              <MenuItem
                key={pages[1]}
                //onClick={handleCloseNavMenu}
                component={Link}
                to='/projects'
              >
                <ListItemIcon>
                  <BuildIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Projects</ListItemText>
              </MenuItem>
              <MenuItem
                key={pages[2]}
                //onClick={handleCloseNavMenu}
                component={Link}
                to='/resume'
              >
                <ListItemIcon>
                  <AssignmentIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{flexGrow: 1, display: {xs: 'flex', md:'none'} }}
          >
            DL
          </Typography>
          <Box sx={{flexgrow: 1, display: {xs: 'none', md:'flex'} }}>
            <Link
              component={RouterLink}
              to='/'
            >
              <Button
                variant='outlined'
                startIcon={<PersonIcon fontSize='small' 
                  />}
                key={pages[0]}
                component={Link}
                to='/'
                sx={{my: 2,mr: 2, color: 'white', display: 'inline-flex', borderColor: 'white' }}
              >
                {pages[0]}
              </Button>
            </Link>
            
            <Link
              component={RouterLink}
              to='/projects'
            >
              <Button
                variant='outlined'
                startIcon={<BuildIcon fontSize='small' />}
                key={pages[1]}
                component={Link}
                to='/projects'
                sx={{my: 2, mr:2, color: 'white', display: 'inline-flex', borderColor: 'white'}}
              >
                {pages[1]}
              </Button>
            </Link>
            
            <Link
              component={RouterLink}
              to='/resume'
            >
              <Button
                variant='outlined'
                startIcon={<AssignmentIcon fontSize='small' />}
                key={pages[2]}
                component={Link}
                to='/resume'
                sx={{my: 2, color: 'white', display: 'inline-flex', borderColor: 'white'}}
              >
                {pages[2]}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header