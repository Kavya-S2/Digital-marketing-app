import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { grey, yellow, green, blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Add this import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Add this import
import MailIcon from '@mui/icons-material/Mail';
import { Grid, Link, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles/Home.css';


export default function CombinedAppBarWithDrawer() {
  const [state, setState] = React.useState({
    left: false,
    darkMode: false,
  });
  const toggleDarkMode = () => {
    setState({ ...state, darkMode: !state.darkMode });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['About us', 'Service', 'Team', 'Blogs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: yellow[700],
      },
      success: {
        main: green[500],
      },
      info: {
        main: blue[500],
      },
      mode: state.darkMode ? 'dark' : 'light',
    },
  });
  const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '95rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Growmart
              </Typography>
              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/Untitled design.png"
                  alt="Background"
                  style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <SwipeableDrawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list()}
          <List>
            <ListItemButton onClick={toggleDarkMode}>
              <ListItemIcon>
                <Brightness4Icon /> {/* Dark mode icon */}
              </ListItemIcon>
              <ListItemText primary={`Switch to ${state.darkMode ? 'Light' : 'Dark'} Mode`} />
            </ListItemButton>
          </List>
        </SwipeableDrawer>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', padding: '2rem', color: theme.palette.secondary.main }}>
          {/* Page content goes here */}
          <div>
            <Typography variant="h4"color='black' gutterBottom>
              Welcome to Growmart - Let’s Craft Your Digital Success Story!
            </Typography>
            <Typography variant="body1"  paragraph>
              
            </Typography>
            
            <Typography variant="body1" paragraph>
              
            </Typography>
            <Typography variant="body1" color='black' paragraph>
            Elevate Small to Mighty with Our Specialized Services
            </Typography>
          </div>
          <Button variant="contained" color="success" size="large" sx={{ marginTop: '2rem' }}>
            Explore
          </Button>

        </Box>
        <section id="home">
                        <h2>Growmart</h2>
                        <p>Your Success, Our Investment</p>
                 <div class="btn">
                  <a class="blue" href="#">Learn More</a>
                  <a class="yellow" href="#">visit our services</a>
                 </div>
                </section>

                <section id="features">
                        <h1>About us</h1>
                        
                        <div class="fea-base">
                                <div class="fea-box">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        <h3>Professional team</h3>
                                        <p>A professional digital marketing team integrates diverse roles, including strategists, content creators, SEO and PPC.</p>

                                </div>
                                <div class="fea-box">
                                        <i class="fa-solid fa-laptop"></i>
                                        <h3>Innovative ideas</h3>
                                        <p>Innovative ideas in digital marketing include leveraging augmented reality, embracing sustainability, utilizing chatbots and AI, exploring voice search optimization</p>
                                        
                                </div>
                                <div class="fea-box">
                                        <i class="fa-solid fa-award"></i>
                                        <h3>Great support</h3>
                                        <p>Providing exceptional customer support through personalized interactions, timely responses</p>
                                        
                                </div>
                        </div>
                </section>
                <section id="features">
                        <h1>Services</h1>
                        
                        <div class="fea-base">
                                <div class="fea-box">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        <h3>Web development</h3>
                                        <p>Web development in digital marketing involves creating user-friendly, SEO-optimized websites, designing landing page.</p>

                                </div>
                                <div class="fea-box">
                                        <i class="fa-solid fa-laptop"></i>
                                        <h3>Business Market analysis</h3>
                                        <p>Business market analysis in digital marketing involves assessing industry trends, competitor strategies, target audience behavior.</p>
                                        
                                </div>
                                <div class="fea-box">
                                        <i class="fa-solid fa-award"></i>
                                        <h3>UI/UX Design</h3>
                                        <p>UI/UX design in digital marketing focuses on creating visually appealing and user-friendly interfaces.</p>
                                        
                                </div>
                        </div>
                </section>

        <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'black',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Growmart
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" color="inherit" display="block">Features</Link>
            <Link href="#" color="inherit" display="block">Integrations</Link>
            <Link href="#" color="inherit" display="block">Pricing</Link>
            <Link href="#" color="inherit" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" color="inherit" display="block">Public API</Link>
            <Link href="#" color="inherit" display="block">Documentation</Link>
            <Link href="#" color="inherit" display="block">Guides</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
      </Box>
    </ThemeProvider>
  );
}
