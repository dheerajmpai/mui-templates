import Container from '@material-ui/core/Container';

import Header from '../components/nav2';
import GridPage from './grid1';

export default function App() {
    var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';

    var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
    return (<>

        <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy2 }}></div>
        <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy3 }}></div>
        <Container>
            <Header />
            {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I will open Free self Defense Coaching Centre for Girls in Hari Nagar Vidhanasabha in next 30 Days. It was my promise in my manifesto, I lost but i will try my best to fullfil my Promise to my people on my own Capacity</p>&mdash; Tajinder Pal Singh Bagga (@TajinderBagga) <a href="https://twitter.com/TajinderBagga/status/1227191554852315136?ref_src=twsrc%5Etfw">February 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            <GridPage />
            <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy }}></div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
    </>)


}
