import { Context } from "../ContextProvider/ContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){

const {Login} = useContext(Context);

if(Login){
    return <Navigate to="/login" />
}


    return children
};


export default PrivateRoute;