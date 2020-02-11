import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import {COMPANY_NAME} from '../constants';
// import {sections as sec} from './nav2';

const sec = [{ 'title': 'Nation', 'url': '/nation' },
{ 'title': 'World', 'url': '/world' },
{ 'title': 'Politics', 'url': '/politics' },
{ 'title': 'Bussiness', 'url': '/biz' },
{ 'title': 'Sports', 'url': '/sports' },
{ 'title': 'Trending', 'url': '/trending' },
{ 'title': 'Jobs', 'url': '/jobs' },
{ 'title': 'About Us', 'url': 'https://news.tess.now.sh/about' },

]

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: '#000AAA',
    fontFamily: 'Comic-Sans',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: 'black',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function MobileDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Sign Up', 'Starred'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sec.map((text, index) => (
          <Link href={text.url}>
            <ListItem button key={text.title}>
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );


  const sections = [
    { 'title': 'Sign Up', 'url': '/signup' },
    { 'title': 'Subscribe', 'url': '/subscribe' },

  ]
  const title = COMPANY_NAME;


  return (
    <div>
      <AppBar position='static' style={{ background: '#FDDB3A', height: '60px', color: 'red', boxShadow: '0 3px 5px #FFFFFF' }} >
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
          <Typography
            component="h5"
            variant="h3"
            color="inherit"
            align="center"
            height='80px'
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          {/* {sections.map(section => (
            <Button disableRipple fullWidth disableFocusRipple variant='text'>
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            </Button>
          ))} */}
        </Toolbar>

      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div >
  );
}

