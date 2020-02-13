import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import React from 'react';
import Link from 'next/link';
import { Image1, Para1, Para3, Title1, Title3, Divider2 } from '../components/comps';
export default function GridPage() {
    const Mar = <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>
    return (
        <React.Fragment>
            {/* <Container> */}
            <Grid container spacing={1}>

                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/brand2.jpeg' style={{ borderRadius: '1px', width: '90%', margin: '2px auto' }} /></Paper>
                </Grid>

                <Grid item xs={12} sm={6} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }}>
                    {/* <Divider2 /> */}

                    <Paper elevation={0} ><Title3>BUILD YOUR BRAND</Title3></Paper>
                    <Divider2 />
                    <Paper elevation={0} ><Para3>Build your brand by advertising on the Hyperweb Ad Network. Publish your ads on The South Asian Express, Awakened Indian and Hyperweb AI. <Link href='/grow'>Read More</Link></Para3></Paper>
                    {Mar}
                    <Paper elevation={0} ><Button color='primary'><Para3>Claim your $200 ad credits now!</Para3></Button></Paper>
                    <Divider2 />

                </Grid>

                {/* Item2 */}
                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>

                <Grid item xs={12} sm={5} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }} >
                    <Paper elevation={0} ><Title3>GROW YOUR ONLINE PRESENCE</Title3></Paper>

                    <Paper elevation={0}><Para3>Build blazing fast websites with advanced tools of Hyperweb AI. Stand out of the crowd and stand up in the search engine ranking with the next generation web-dev technologies. <Link href='/build'>Read More</Link></Para3></Paper>
                    {Mar}

                    <Paper elevation={0} ><Button color='primary'><Para3>Start Building your website for FREE!</Para3></Button></Paper>
                    <Divider2 />
                </Grid>



                <Grid item xs={12} sm={7} >
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/speed1.jpeg' style={{ borderRadius: '1px', width: '90%', margin: '2px auto' }} /></Paper>
                </Grid>

                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>




                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>
                {/* <Grid item xs={12}><Divider2/></Grid> */}


            </Grid>
            {/* </Container> */}
        </React.Fragment>


    )


}