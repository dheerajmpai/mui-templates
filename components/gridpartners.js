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
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/inspyre.jpeg' style={{ borderRadius: '1px', width: '90%', margin: '2px auto' }} /></Paper>
                </Grid>

                <Grid item xs={12} sm={6} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }}>
                    {/* <Divider2 /> */}

                    <Paper elevation={0} ><Title3>Inspyre</Title3></Paper>
                    <Divider2 />
                    <Paper elevation={0} ><Para3> Inspyre is the Python programmers' community supported by Hyperweb AI. The community has taken open-source projects <a href='https://pypi.org/project/inspyre/'>inspyre</a>, <a href='https://pypi.org/project/saenews/'>saenews</a>, <a href='https://pypi.org/project/hypereffects'>hypereffects</a> which is downloaded more than 47,000 times. <Link href='/inspyre'>Read More</Link></Para3></Paper>
                    {Mar}
                    <Paper elevation={0} ><Button color='primary'><Para3>Claim your $200 ad credits now!</Para3></Button></Paper>
                    <Divider2 />

                </Grid>

                {/* Item2 */}
                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>

                <Grid item xs={12} sm={5} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }} >
                    <Paper elevation={0} ><Title3>The Language project</Title3></Paper>

                    <Paper elevation={0}><Para3>Do you know that German Wikipedia has around 2 Million articles while the highest an Indian language has is only 91,000 (Tamil Wikipedia). The Language Project is a collaboration with Awakened Indian to bridge the gap. Around 30 volunteers from the Language project regularly translate Wikipedia articles from English to Kannada. These articles are later used as datasets for the tranlsation engine in Hyperweb AI <Link href='/tlp'>Read More</Link></Para3></Paper>
                    {Mar}

                    <Paper elevation={0} ><Button color='primary'><Para3>Join the community here</Para3></Button></Paper>
                    <Divider2 />
                </Grid>



                <Grid item xs={12} sm={7} >
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/wiki.jpeg' style={{ borderRadius: '1px', width: '90%', margin: '2px auto' }} /></Paper>
                </Grid>

                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>


                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/it.jpg' style={{ borderRadius: '1px', width: '90%', margin: '2px auto' }} /></Paper>
                </Grid>

                {/* <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid> */}
                {/* Item 3 */}
                <Grid item xs={12} sm={6} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }}>

                    <Paper elevation={0} ><Title3>CONTRIBUTE TO OPENSOURCE SOFTWARES</Title3></Paper>
                    <Divider2 />
                                        {Mar}

                    <Paper elevation={0} ><Para3> Work on Open-source softwares that are used by thousands of users worldwide. Intern at Hyperweb AI. Learn, Build, contribute and have fun building latest and the best technology that change the world. <Link href='/opensource'>Read More</Link> </Para3></Paper>
                    {Mar}

                    <Paper elevation={0} ><Link href='/intern'><Button color='primary'><Para3>Apply for Internship!</Para3></Button></Link></Paper>
                    <Divider2 />

                </Grid>
                {/* Item 4 */}
                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>

                <Grid item xs={12} sm={5} style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '100%' }} >
                    <Paper elevation={0} ><Title3>JOIN THE COMMUNITY</Title3></Paper>

                    <Paper elevation={0}><Para3>Join the Hyperweb AI community in developing impactful technologies that change the world.<Link href='/slack'>Read More</Link></Para3>  </Paper>
                    {Mar}

                    <Paper elevation={0} ><Button color='primary'><Para3> Join the Slack group Now!</Para3></Button></Paper>
                    <Paper elevation={0} style={{ textAlign: 'center' }}><Para3>Not on Slack? Join using <Link href='/whatsapp'>Whatsapp!</Link></Para3>  </Paper>
                    <Divider2 />


                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} style={{ textAlign: 'center' }}><img src='/ai4all.jpg' style={{ borderRadius: '1px', width: '100%', margin: '2px auto' }} /></Paper>
                </Grid>


                <Grid item xs={12}><div style={{ margin: '50px 0px 50px 0px' }}> </div></Grid>
                {/* <Grid item xs={12}><Divider2/></Grid> */}


            </Grid>
            {/* </Container> */}
        </React.Fragment>


    )


}