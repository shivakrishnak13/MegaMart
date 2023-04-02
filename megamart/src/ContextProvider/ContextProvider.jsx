import { createContext } from "react";
import { useState } from "react";
export const Context = createContext()

function ContextProvider({children}){
    

    const [data,setdata]= useState("hello");

    const [Login,Setlogin]= useState(true);
    const [Username,SetUsername]= useState("")
    const [Email,SetEmail]= useState("")
    const [cart,Setcart]= useState([]);
    
    

return( <Context.Provider value={{Login,Setlogin,Username,SetUsername ,Email,SetEmail,cart,Setcart}}>
    {children}
</Context.Provider>)

};

export default ContextProvider;