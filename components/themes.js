// export const theme = createMuiTheme();
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme();
theme.typography.h3 = {
    fontSize: '45px',
    textAlign: 'center',
    fontFamily1: '"Helvatica", Times, sans-serif',
    [theme.breakpoints.down('xs')]: {
        fontSize: '30px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '45px',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '60px',
    },
    '@media (min-width:2400px)': {
        fontSize: '80px',
    },
};

theme.typography.h4 = {
    fontSize: '40px',
    textAlign: 'center',
    fontFamily1: '"Helvatica", Times, sans-serif',
    // margin: '20px 20px 20px 20px',

    [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
        margin: '0px 0px 0px 0px',

    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '35px',
        margin: '0px 0px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '35px',
        margin: '20px 20px 20px 20px',
    },
};

theme.typography.body1 = {
    fontFamily1: '"Helvatica", Times, sans-serif',
    fontSize: '20px',
    [theme.breakpoints.down('xs')]: {
        fontSize: '10px',
        margin: '0px 0px 0px 0px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
        margin: '0px 0px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        margin: '20px 20px 20px 20px',
    },

};