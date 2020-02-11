import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { Link as mLink } from '@material-ui/core/Link';
import Link from 'next/link'
import {COMPANY_NAME, COLOR_1} from '../constants';

const useStyles = makeStyles(theme => ({
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

//  const { sections, title } = props;
const sections = [{ 'title': 'Nation', 'url': '/nation' },
{ 'title': 'World', 'url': '/world' },
{ 'title': 'Politics', 'url': '/politics' },
{ 'title': 'Bussiness', 'url': '/biz' },
{ 'title': 'Sports', 'url': '/sports' },
{ 'title': 'Trending', 'url': '/trending' },
{ 'title': 'Jobs', 'url': '/jobs' },
{ 'title': 'About Us', 'url': 'https://news.tess.now.sh/about' },
]
const title = COMPANY_NAME

export const DesktopHeader1 = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' style={{ boxShadow: '0 8px 6px -6px #AAAAAA', background: '#FFFFFF', height: '42px' }} >
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
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
        ))}
        {/*<Link href='/about'>Know about us</Link>*/}
      </Toolbar>
    </AppBar>)
}


export const DesktopHeader2 = () => {
  const classes = useStyles();
  return (
    <React.Fragment >
      <AppBar position='static' style={{ background: '#FFFB3A', height: '120px', color: 'red', boxShadow: '0 3px 5px #FFFFFF' }} >
        <Toolbar className={classes.toolbar} style={{ height: '120px', color: 'red' }}>
          <Button size="small"> <Link href='/signup'>  Subscribe</Link></Button>
          <Typography
            component="h2"
            variant="h3"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            <Link href='/signup'>Sign up</Link>
          </Button>
        </Toolbar>
      </AppBar>


    </React.Fragment>
  )
}

// DesktopHeader.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };

