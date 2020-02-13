import Head from 'next/head';
import { COMPANY_NAME } from '../constants';
export const Heads = () => {
    var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';

    var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
    var thisIsMtrack = `<script type="text/javascript">
    var _paq = window._paq || [];
  
    _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
    _paq.push(["setCookieDomain", "*.hyperweb.ai"]);
    _paq.push(["setDomains", ["*.hyperweb.ai"]]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://hai.matomo.cloud/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/hai.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  </script>
  <noscript><p><img src="https://hai.matomo.cloud/matomo.php?idsite=1&amp;rec=1" style="border:0;" alt="" /></p></noscript>
  `
    return (
        <Head>
            <title>{COMPANY_NAME}</title>
            
            <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMtrack }}></div>
            <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy2 }}></div>
            <div className="content" dangerouslySetInnerHTML={{ __html: thisIsMyCopy3 }}></div>
        </Head>
    )




}