import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import {Image1, Para1} from '../components/comps';
export default function GridPage() {
    return (
        <React.Fragment>
            {/* <Container> */}
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} >
                    <Paper elevation={0} style={{textAlign: 'center'}}><img src='/brand1.jpeg' style={{ borderRadius: '1px', width: '60%', margin: '2px auto' }}/></Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper elevation={0}><Para1>Build your brand by advertising on the Hyperweb Ad Network. Publish your ads on The South Asian Express, Awakened Indian and Hyperweb AI. Claim your $200 ad credits now! </Para1></Paper>
                </Grid>
                <Divider/>
                <Grid item xs={12} sm={5} >
                    <Paper elevation={0}>Build blazing fast websites with advanced tools of Hyperweb AI. Stand out of the crowd and stand up in the search engine ranking with the next generation website technologies.</Paper>
                </Grid>
                <Grid item xs={12} sm={7} >
                <Paper elevation={0} style={{textAlign: 'center'}}><img src='/speed2.jpeg'  style={{ borderRadius: '1px', width: '60%', margin: '2px auto' }}/></Paper>
                </Grid>
            </Grid>
{/* </Container> */}
        </React.Fragment>


    )


}