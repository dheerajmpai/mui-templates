import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import Header from './../components/nav2';
import GridPage from './grid1';
import Footer from './footer';
import {theme} from './../components/themes';
import {Article1} from './../components/article1';
import {Para1,Para2,Para3,Title1,Title2,Title3} from './../components/comps';

export default function App() {
    var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';

    var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
    return (<>

        <div className="content"  dangerouslySetInnerHTML={{ __html: thisIsMyCopy2 }}></div>
        <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy3 }}></div>
        <Container maxWidth='lg' style={{ margin: '20px 20px 20px 20px auto' }}>

            <Header />
<Article1>
<Typography>
<h1>Contact Us</h1>

<p>
Email us at : editor [at] sae [dot] news
</p>
 </Typography>
</Article1>
            {/*<GridPage />*/}
            <Footer/>
        </Container>
    </>)


}
