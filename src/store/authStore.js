import { createContext, useState,useEffect,useCallback} from "react";
let logOutTimer;
const AuthContext = createContext({
  token: "",
  user: "",
  isLogin: false,
  login: (token) => {},
  logout: (token) => {},
});

const calcRemainingTime = (expTime) =>{
    const currentTime = new Date().getTime();
    const adiExpTime = new Date(expTime).getTime();
    const remainingTime = adiExpTime - currentTime;
    return remainingTime
}
const getStoredToken =()=>{
    const initialToken = localStorage.getItem('token');
    const storedExpTime = localStorage.getItem('expTime');
  const storedEmail = localStorage.getItem('email');

    const remainingTime = calcRemainingTime(storedExpTime);
    if(remainingTime <= 3600){
        localStorage.removeItem('token');
        localStorage.removeItem('expTime');
        return null;
    }
    return {
        token : initialToken,
        tokenDuration : remainingTime,
        email: storedEmail
    };
}

export const StoreProvider = (props) => {
    const tokenData = getStoredToken();

    let initialToken;
    let initialUser;
    if(tokenData){
        initialToken = tokenData.token;
        initialUser = tokenData.email
    }
    const [user,setUser] = useState(initialUser)
    const [token, setToken] = useState(initialToken);

  const userIsLogin = !!token;
  const logInHandler = (token,email, expTime) => {
    setToken(token);
    setUser(email);
    console.log(email);
    localStorage.setItem('email',email)
    localStorage.setItem('token', token);
    localStorage.setItem('expTime', expTime)
    let remainingTime = calcRemainingTime(expTime);
    setTimeout(logOutHandler,remainingTime);
  };
  const logOutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expTime')
    localStorage.removeItem('email')
    if(logOutTimer){
        clearTimeout(logOutTimer);
    }
  },[]);

  const contextValue = {
    token,
    isLogin: userIsLogin,
    login: logInHandler,
    logout: logOutHandler,
    user
  };

  useEffect(() => {
    if(tokenData){
        console.log(tokenData.tokenDuration);
        logOutTimer = setTimeout(logOutHandler, tokenData.tokenDuration)
    }
  },[tokenData, logOutHandler])

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
