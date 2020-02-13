import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Typography from '@material-ui/core/Typography';
// import { Link as mLink } from '@material-ui/core/Link';
// import Link from 'next/link'
// import DesktopHeader from './nav';
import Hidden from '@material-ui/core/Hidden';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MobileDrawer from './draw1';
import { DesktopHeader1, DesktopHeader2 } from './nav3';
import { Heads } from './heads';
import {theme} from './themes';


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

export default function Header() {
  // const classes = useStyles();
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  //  const { sections, title } = props;
  // const title = 'News Now'
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment >
        <style>
          @import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Patua+One&display=swap');
      </style>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* {mobOrDesktop} */}
        {/* <MobileDrawer/> */}
        {/* <DesktopHeader /> */}
        <Heads />
        <Hidden xsDown implementation="js">

          {/* <DesktopHeader1 /> */}
          <DesktopHeader2 />
        </Hidden >

        <Hidden xsDown implementation="js">

          <DesktopHeader1 />
          {/* <DesktopHeader2 /> */}
        </Hidden >

        <Hidden smUp implementation="js">

          <MobileDrawer />
        </Hidden>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

