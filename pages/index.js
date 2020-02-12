import Container from '@material-ui/core/Container';

import Header from '../components/nav2';
import GridPage from './grid1';

export default function App() {
    var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';

    var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
    return (<>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Patua+One&display=swap');
        </style>
        <div className="content"  dangerouslySetInnerHTML={{ __html: thisIsMyCopy2 }}></div>
        <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy3 }}></div>
        <Container style={{ margin: '20px 20px 20px 20px auto' }}>
            <div style={{fontFamily: "'Anton', sans-serif"}}>
                Hello Anton here
            </div>
            <Header />

            <GridPage />
        </Container>
    </>)


}
