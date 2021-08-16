import { createContext, useState } from "react";

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

export const StoreProvider = (props) => {
    let initialState = localStorage.getItem('token')
    const [token, setToken] = useState(initialState);

  const userIsLogin = !!token;
  const logInHandler = (token, expTime) => {
    setToken(token);
    localStorage.setItem('token', token)
    let remainingTime = calcRemainingTime(expTime);
    setTimeout(logOutHandler,3000);
  };
  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token,
    isLogin: userIsLogin,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
