
import { useContext,useState } from "react";
import AuthContext from "../store/authStore";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
function Profile() {
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
        <form onSubmit={submitHandler}>
            change pass
            <input type="password" value={newPass} onChange={(e) =>{setNewPass(e.target.value)}} />
            <button type="submit">submit</button>
        </form>
    )
}

export default Profile
