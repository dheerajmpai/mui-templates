


export default function Pay() {

const inhtml = `<script src="https://js.instamojo.com/v1/checkout.js"></script>
<script>
  Instamojo.open('https://www.instamojo.com/@saenews');
</script>`


return(<><script src="https://js.instamojo.com/v1/checkout.js"></script>
<script>
  Instamojo.open('https://www.instamojo.com/@saenews'); 
</script>


<div className="content" dangerouslySetInnerHTML={{ __html: inhtml}}></div>
</>

)}
