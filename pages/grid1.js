import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import {Image1} from '../components/comps';
export default function GridPage() {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={7} >
                    <Paper><Image1 src='/iisc.jpeg'/>Hello here</Paper>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Paper>Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2Hello 2</Paper>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Paper>Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3Hello 3</Paper>
                </Grid>
                <Grid item xs={12} sm={7} >
                <Paper><Image1 src='/rbi.jpeg'/>Hello here</Paper>
                </Grid>
            </Grid>
        </React.Fragment>


    )


}