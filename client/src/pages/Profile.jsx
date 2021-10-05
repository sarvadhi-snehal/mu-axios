
import { useContext,useState } from "react";
import AuthContext from "../store/authStore";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core';
import Button from "@material-ui/core/Button"
import FormLabel from '@material-ui/core/FormLabel';
const useStyles = makeStyles(
    {
        field:{
            marginBottom :10,
            marginTop :10
         
        },
        form :{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "baseline",
            maxWidth:"30rem",
            textAlign: "left",
            padding: "3rem"
        }
    }
)
function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [newPass,setNewPass] = useState("")
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const submitHandler = (e) => {
            e.preventDefault();
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE}`,{
                idToken: token,
                password: newPass,
                returnSecureToken: true
            }).then(response => {
                history.replace('/')
            console.log("pss changed");
        })
            .catch(err => console.err)
    }

    return (
        <form onSubmit={submitHandler} color="primary" className={classes.form}>
            <FormLabel color="primary" disabled={false} >Change Password</FormLabel>
            <TextField
            className={classes.field}
            type="password" value={newPass} onChange={(e) =>{setNewPass(e.target.value)}}
          label="New Password"
          color="secondary"
          fullWidth
          required
          variant="outlined"
       
          
        />   
            <Button variant="outlined" color="primary" type="submit">submit</Button>
        </form>
    )
}

export default Profile
