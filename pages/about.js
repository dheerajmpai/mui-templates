import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import Header from './../components/nav2';
import GridPage from './grid1';
import Footer from './footer';
import {theme} from './../components/themes';
import {Article1} from './../components/article1';
import {Para1,Para2,Para3,Title1,Title2,Title3} from './../components/comps';

{/* <style>
@import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Patua+One&display=swap');
</style> 
font-family: 'Anton', sans-serif;
font-family: 'Fjalla One', sans-serif;
font-family: 'Patua One', cursive;
*/}

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
<h1>About Us</h1><p>Hyperweb AI (Hyperweb Media Private Limited) is a Private incorporated  Non-govt company and is registered at Registrar of Companies, Bengaluru  under Ministry of Corporate Affairs, India. </p>
<p>
Hyperweb Media is the parent organization of  Hyperweb AI,  The South Asian Express (sae.news) , RealPolitics (realpolitics.in) and Campus Connect (campusconnect.sae.news)

 </p>
<p>Hyperweb AI is the technology wing of the Hyperweb Media. We involve in AI research in the field of natural language translation through which we belive we can make the Digital Boom in India more inclusive. You can read more about our initiatives here. 
 </p>
<p>
We also provide technical consultancy for startups, bussinesses and Non-Profits which include building both web and mobile AI platforms and advertising.  
 </p>
<h2>
Our Open Source Policy
 </h2>
<p>
Hyperweb AI is committed to keep the internet free and open. All the content that is produced by the South Asian Express Team, RealPolitics and Campus Connect  is licensed under CC-BY-SA 3.0, unless otherwise specified. Which means anybody can use, modify and redistribute, the content, even commercially. For more information, please read the complete detail of the license here.
 </p>
<p>
The textual content from Hyperweb AI (hyperweb.ai) is also released CC-BY-SA 3.0. 
 </p>
<p>
We extensively contribute to open source software community. Our python based image editing software saenews and inspyre is downloaded more than 47,000 times. Know more about the open-source contribution here.
 </p>
 </Typography>
</Article1>
            {/*<GridPage />*/}
            <Footer/>
        </Container>
    </>)


}
