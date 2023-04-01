import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Login.module.css'
import '../'
import Bird from "../Logos/Bird.gif"
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { Axios } from "axios";

function LoginPage(){

const link = useNavigate()

const[email,setemail]= useState();
const [password,setpassword]=useState();


const HandleSubmit = (e)=>{
  e.preventDefault();

let obj={
     email,
     password
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
          console.log(data)
     } catch (error) {
         console.log(error) 
     }
}

LoginReq()

  //link('/otp')

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
          



   

 
     </div>
        
};

export default LoginPage;