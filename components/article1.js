import Grid from '@material-ui/core/Grid';


export const Article1 = (props) => {

return (
<Grid container spacing={0}  justify='center'>
<Grid item xs={12} sm={9} style={{margin:'5px 5px 5px 5px'}}>

{props.children}

</Grid>
<Grid item xs={12} sm={9} >

{props.children}

</Grid>

</Grid>


)



}
