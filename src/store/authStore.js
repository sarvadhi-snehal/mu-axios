import { createContext, useState,useEffect,useCallback} from "react";
let logOutTimer;
const AuthContext = createContext({
  token: "",
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

    const remainingTime = calcRemainingTime(storedExpTime);
    if(remainingTime <= 3600){
        localStorage.removeItem('token');
        localStorage.removeItem('expTime');
        return null;
    }
    return {
        token : initialToken,
        tokenDuration : remainingTime
    };
}

export const StoreProvider = (props) => {
    const tokenData = getStoredToken();

    let initialToken;
    if(tokenData){
        initialToken = tokenData.token
    }

    const [token, setToken] = useState(initialToken);

  const userIsLogin = !!token;
  const logInHandler = (token, expTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expTime', expTime)
    let remainingTime = calcRemainingTime(expTime);
    logOutTimer : setTimeout(logOutHandler,remainingTime);
  };
  const logOutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expTime')
    if(logOutTimer){
        clearTimeout(logOutTimer);
    }
  },[]);

  const contextValue = {
    token,
    isLogin: userIsLogin,
    login: logInHandler,
    logout: logOutHandler,
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
