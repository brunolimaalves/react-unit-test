import { Navigate } from "react-router-dom";
import { FunctionComponent  } from 'react'

export type AppRoutesType = {
  isAuth: boolean;
  component: FunctionComponent;
  isPublic?: boolean;
};

const RouterHandler= ({
    isAuth,
    component: Component,
    isPublic = false,
  }: AppRoutesType) => (isAuth ? <Navigate to={isPublic ? "/" : "/login"} /> : <Component />);
  
  export default RouterHandler;