import React from 'react'
import  Typography  from '@material-ui/core/Typography';
import  Button  from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    btn:{
        fontSize: 12,
        backgroundColor : 'rgba(255, 250, 133,0.2)',
        '&:hover':{
            backgroundColor : 'yellow'
        }
    }
})
function CreateReview() {
    const classes = useStyles();
    return (
        <div>
           <Typography variant="h4"
           color="secondary" gutterBottom>
               Addð new post
           </Typography>

           <form noValidate autoComplete="off">
            <TextField 
            label="Title"
            color="secondary"
            fullWidth
            required
            variant="outlined" />
                
           </form>
           <Button 
           type="submit"
            className={classes.btn}
           variant="outlined"
           startIcon={<AddIcon/>} >Submit</Button>
        </div>
    )
}

export default CreateReview
