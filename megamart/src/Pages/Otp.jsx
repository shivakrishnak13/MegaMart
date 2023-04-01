import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Login.module.css'

import Bird from "../Logos/Bird.gif"
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'


function OtpPage(){

const link = useNavigate()



const HandleSubmit = (e)=>{
  e.preventDefault();

  

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

               <BreadcrumbItem>
                    <BreadcrumbLink href='#'>OTP</BreadcrumbLink>
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
     <form id="otprequest" className={styles.form}> 
     <input type="otp" id="otpnumber" class={styles.input} placeholder="Enter Your OTP" required/> <br />
     <p className={`${styles.alertmessage} ${styles.otpincorrectalertmessage}`}> </p>
     <p>By continuing, you agree to Megamart's <span className={styles.T_C}>Terms of Use</span> and <span className={styles.T_C}>Privacy Policy.</span> </p>
     <input type="submit" className={styles.btnloginOtp}  value="Verify" />
     </form>
            <p className={styles.resendotp}>Not received your code? <span id={styles.Resend}>Resend code</span></p>
<a href="#" onClick={()=> link('/signup')} id={styles.newaccount}>New to Megamart? Create an account</a>

     </div>


     </div>
          


     

 
     </div>
        
};

export default OtpPage;