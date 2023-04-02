import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Login.module.css'
import freeship from '../Logos/freeshipping.png'
import Bird from "../Logos/Bird.gif"
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { Axios } from "axios";
import Footer from '../HomePage/Footer';
import { Popover,PopoverCloseButton,PopoverContent,PopoverHeader,PopoverBody,PopoverTrigger,PopoverFooter,Button,Portal,Box } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";
import { AlertIcon,AlertDescription,Alert,AlertTitle } from "@chakra-ui/react";

function LoginPage(){

const link = useNavigate()

const[email,setemail]= useState();
const [password,setpassword]=useState();

const {SetEmail,SetUsername}= useContext(Context)
const [mismatch,Setmismatch]= useState(false);
const HandleSubmit = (e)=>{
  e.preventDefault();

let obj={
     email,
     password,
}



async function LoginReq(){
     try {
          let res= await fetch('http://localhost:8000/login',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
          })

          let data= await res.json();
         
     if(data.accessToken){
          alert("otp")
     }else{
        Setmismatch(true);
setTimeout(() => {
     Setmismatch(false);
}, 2000);

     }


         if(res.ok){
          link('/otp');
          SetEmail(data.user.email)
          SetUsername(data.user.username)

         }
     } catch (error) {
         console.log(error) 
     }
}

LoginReq()

  

}



    return <div>
     <NavBar/>
     <div className={styles.Bread}>
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'20px'} color={'rgb(130, 130, 130)'} >

          
               <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink onClick={()=>link('/login')} >Login</BreadcrumbLink>
               </BreadcrumbItem>

              

          </Breadcrumb>
          </div>


          {mismatch? <Alert status='error' mt='20px' width={'750px'} ml='420px' borderRadius={'5px'} >
  <AlertIcon />
  <AlertTitle>Email Or Password are Incorrect</AlertTitle>
  <AlertDescription> Please Enter your Correct Email & Password</AlertDescription>
</Alert>: ""}



     <div className={styles.login}>
     <div id={styles.left}>
<div>
<p className={styles.logintext}>Login</p>

<img src={Bird} alt="" />
</div>
     </div>

     <div id={styles.right}>
<form action="" onSubmit={HandleSubmit} id='loginpage' className={styles.form}>
<input type="number/email" name="email" className={styles.input} onChange={(e)=> setemail(e.target.value)} placeholder="Enter Email/Mobile number" required/>
<br />
<input type="password" onChange={(e)=> setpassword(e.target.value)} className={styles.input} placeholder="Enter Your Password" required/>
<p>By continuing, you agree to Megamart's <span className={styles.T_C}>Terms of Use</span> and <span className={styles.T_C}>Privacy Policy.</span> </p>
<input type="submit" className={styles.btnlogin} value="Request OTP" />

</form>
<a href="#" onClick={()=> link('/signup')} id={styles.newaccount}>New to Megamart? Create an account</a>

     </div>


     </div>
          
     


     <div className={styles.banner}>
     <img src={freeship} alt="baner" style={{borderRadius:"10px"}} />
</div>

   

<Footer/>

 
     </div>
        
};

export default LoginPage;