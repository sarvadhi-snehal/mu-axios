import React from 'react'
import  Typography  from '@material-ui/core/Typography';
function Review(props) {
    return (

        <div key={props.id}>
          
            <Typography 
            ali
            variant="h5"
            color="primary">{props.name}</Typography>
            <Typography variant="body2">{props.discription}</Typography>
        </div>
    )
}

export default Review
