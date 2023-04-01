import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Signup.module.css'

import Flower from '../Logos/Flower.gif'
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Footer from "../HomePage/Footer";



function SignupPage() {

     const link = useNavigate()


     return <div>
          <NavBar />
   <div className={styles.Bread}>
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'20px'} color={'rgb(130, 130, 130)'} >

          
               <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
               <BreadcrumbLink onClick={()=>link('/login')} >Login</BreadcrumbLink>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='/signup' >Signup</BreadcrumbLink>
               </BreadcrumbItem>

          </Breadcrumb>
          </div>

          <div className={styles.login} >
               <div id={styles.left}>
                    <div>
                         <p className={styles.logintext}>Sign up</p>

                         <img src={Flower} alt="" />
                    </div>
               </div>

               <div id={styles.right}>
                    <form action="" className={styles.form}>

                         <input type="name" name="name" className={styles.input} placeholder="Enter Your Full Name" required></input>
                         <br />
                         <input type="number/email" name="email" className={styles.input} placeholder="Enter Email/Mobile number" required />
                         <br />
                         <input type="password" id="passinputsigup1" className={styles.input} placeholder="Enter Your Password" required />
                         <br />
                         <input type="password" id="passinputsignup2" className={styles.input} placeholder="Confirm Your Password" required></input>
                         <br />
                         <p>By continuing, you agree to Megamart's <span className={styles.T_C}>Terms of Use</span> and <span className={styles.T_C}>Privacy Policy.</span> </p>
                         <input type="submit" className={styles.btnlogin} value="Create Account" ></input>

                    </form>
                    <button type="submit" className={styles.existingbtn} onClick={() => link('/login')} >Existing User? Log in</button>

               </div>


          </div>






<Footer />



     </div>

};

export default SignupPage;