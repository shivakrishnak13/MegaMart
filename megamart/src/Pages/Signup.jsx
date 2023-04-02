import NavBar from "../HomePage/NavBar";
import styles from '../Styles/Signup.module.css'
import fastdel from '../Logos/FastDel.png'
import Flower from '../Logos/Flower.gif'
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useToast } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Footer from "../HomePage/Footer";
import { useReducer,useState } from "react";
import { Spinner } from '@chakra-ui/react'
import { AlertIcon,AlertDescription,Alert,AlertTitle } from "@chakra-ui/react";

const IntialState = {
     email : "",
     password : "",
     username : "",
     pass2:"",
}


const reducer = (state,action)=>{

     switch(action.type){
          case "Name" :{
               return {
                    ...state,
                    username : action.payload
               }
          }
          case "Email" :{
               return {
                    ...state,
                    email : action.payload
               }
          }
          case "Pass" :{
               return {
                    ...state,
                    password : action.payload
               }
          }
          case "Pass2":{
               return{
                    ...state,
                    pass2: action.payload
               }
          }
          default : {
               throw new Error('Not Found')
          }
     }
}

// component

function SignupPage() {

     const link = useNavigate()
     const toast = useToast()
const [carete,setcreate] = useState(false)

const [state,dispatch]= useReducer(reducer,IntialState)
const [mismatch,Setmismatch]= useState(false)




const HandleSubmit = (e)=>{
 e.preventDefault();
 setcreate(true);
 




 let obj={
     email: state.email ,
     password: state.password,
     username : state.username,
}

 async function LoginReq(){
    
     try {
          let res= await fetch('http://localhost:8000/register',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
          })

          let data= await res.json();
         
     } catch (error) {
         console.log(error) 
     }
}
console.log(obj)



setTimeout(() => {
     toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        link('/login')
        setcreate(false);
        e.target.reset();

}, 2000);


}



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
          {mismatch? <Alert status='error' width={'400px'} ml='600px' borderRadius={'5px'} >
  <AlertIcon />
  <AlertTitle>OTP is Incorrect</AlertTitle>
  <AlertDescription>Enter Correct OTP</AlertDescription>
</Alert>:""}


          <div className={styles.login} >
               <div id={styles.left}>
                    <div>
                         <p className={styles.logintext}>Sign up</p>

                         <img src={Flower} alt="" />
                    </div>
               </div>

               <div id={styles.right}>
                    <form action="" className={styles.form}  onSubmit={HandleSubmit} >

                         <input type="name" name="name" onChange={(e)=> dispatch({type: "Name" , payload : e.target.value})} className={styles.input} placeholder="Enter Your Full Name" required></input>
                         <br />
                         <input type="number/email" name="email" onChange={(e)=> dispatch({type: "Email" , payload : e.target.value})} className={styles.input} placeholder="Enter Email/Mobile number" required />
                         <br />
                         <input type="password" id="passinputsigup1" onChange={(e)=> dispatch({type: "Pass" , payload : e.target.value})} className={styles.input} placeholder="Enter Your Password" required />
                         <br />
                         <input type="password" id="passinputsignup2" onChange={(e)=> dispatch({type: "Pass2" , payload : e.target.value})} className={styles.input} placeholder="Confirm Your Password" required></input>
                         <br />
                         <p>By continuing, you agree to Megamart's <span className={styles.T_C}>Terms of Use</span> and <span className={styles.T_C}>Privacy Policy.</span> </p>
                         {
                              carete? <button type="submit" className={styles.create}  ><Spinner mr='10px' color='red.500' /> <span style={{ marginTop : "10px"}} >Creating Account</span> </button> :<button type="submit" className={styles.btnlogin}  >Create Account</button>
                         }
                        {/* // <button type="submit" className={styles.btnlogin}  >Create Account</button> */}

                    </form>
                    <button type="submit" className={styles.existingbtn} onClick={() => link('/login')} >Existing User? Log in</button>

               </div>


          </div>


<div className={styles.banner}>
     <img src={fastdel} alt="baner" style={{borderRadius:"10px"}} />
</div>



<Footer />



     </div>

};

export default SignupPage;