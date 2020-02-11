import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';

export default function GridPage() {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} md={7} >
                    <Paper>Hello 1</Paper>
                </Grid>
                <Grid item xs={12} md={5} >
                    <Paper>Hello 2</Paper>
                </Grid>
                <Grid item xs={12} md={5} >
                    <Paper>Hello 3</Paper>
                </Grid>
                <Grid item xs={12} md={7} >
                    <Paper>Hello 4</Paper>
                </Grid>
            </Grid>
        </React.Fragment>


    )


}