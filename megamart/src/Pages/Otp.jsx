import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Login.module.css'
import { useContext,useRef, useState } from "react";
import Bird from "../Logos/Bird.gif"
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import {Context} from '../ContextProvider/ContextProvider'
import { Popover,PopoverCloseButton,PopoverContent,PopoverHeader,PopoverBody,PopoverTrigger,Button,Portal,Box } from "@chakra-ui/react";
import { ChatIcon} from '@chakra-ui/icons';
import { AlertIcon,AlertDescription,Alert,AlertTitle } from "@chakra-ui/react";




function OtpPage(){


const {Setlogin} = useContext(Context);
const link = useNavigate()
const {data}= useContext(Context)
const initRef = useRef()
console.log(data)
const [otp,Setotp] = useState("")
const [enteredotp,Setenteredotp]= useState("")
const [incorrect,SetIncorrect]= useState(false);
const [correctotp,setcorrectotp]= useState(false);

const Generateotp = ()=>{
     Setotp(Math.floor(Math.random()*1000000))
}




const HandleSubmit = (e)=>{
  e.preventDefault();
if(enteredotp==otp){
    
     setcorrectotp(true);

     setTimeout(() => {
          link('/');
          Setlogin(false);
          setcorrectotp(false);
     }, 2000);

     
}else{
     SetIncorrect(true);

     setTimeout(() => {
          SetIncorrect(false);
     }, 2000);

}
  

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

          {incorrect? <Alert status='error' width={'400px'} ml='600px' borderRadius={'5px'} >
  <AlertIcon />
  <AlertTitle>OTP is Incorrect</AlertTitle>
  <AlertDescription>Enter Correct OTP</AlertDescription>
</Alert> : correctotp? <Alert status='success' width={'400px'} ml='600px' borderRadius={'5px'}>
    <AlertIcon />
    OTP Verified. Redirecting to Home Page....
  </Alert> : "" }

     <div className={styles.login}>
     <div id={styles.left}>
<div>
<p className={styles.logintext}>Login</p>

<img src={Bird} alt="" />
</div>
     </div>

     <div id={styles.right}>
     <form id="otprequest" className={styles.form} onSubmit={(e)=>HandleSubmit(e)}> 
     <input type="otp" id="otpnumber" class={styles.input} placeholder="Enter Your OTP" onChange={(e)=>Setenteredotp(e.target.value)} required/> <br />
     <p className={`${styles.alertmessage} ${styles.otpincorrectalertmessage}`}> </p>
     <p>By continuing, you agree to Megamart's <span className={styles.T_C}>Terms of Use</span> and <span className={styles.T_C}>Privacy Policy.</span> </p>
     <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button onClick={Generateotp } className={styles.otpgen} >Generate Otp </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w='450px' h='200px' postion='absolute' top='450px' left='765px'  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
              <PopoverHeader>You Have a New Notification <ChatIcon/></PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
              <b style={{marginRight:'5px'}}> {otp}</b>
                   is the verification code to log in to your Megamart  account.  Please DO NOT SHARE  this code with anyone including delivery agents.
                </Box>
                <Button
                  mt={6}
                  colorScheme='blue'
                  onClick={onClose}
                  ref={initRef}
                >
                  Close
                </Button>
              </PopoverBody>

            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>


     <input type="submit" className={styles.btnloginOtp}  value="Verify" />
     </form>
            <p className={styles.resendotp}>Not received your code? <span id={styles.Resend}>Resend code</span></p>
<a href="#" onClick={()=> link('/signup')} id={styles.otpnewaccount}style={{marginTop:"30px"}} >New to Megamart? Create an account</a>

     </div>


     </div>
          
    
     

 
     </div>
        
};

export default OtpPage;