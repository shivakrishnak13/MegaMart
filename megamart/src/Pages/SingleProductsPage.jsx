import NavBar from "../HomePage/NavBar";
import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,HStack,Image,Text,Heading,Flex,Button,Spacer } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {FcShipped,FcApproval} from "react-icons/fc"
import {MdLocationOn} from "react-icons/md"
import {VscSaveAll} from 'react-icons/vsc'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Stars from "../HomePage/Stars";
import Banner from '../Logos/Banner.png'
import Footer from "../HomePage/Footer";
import { Context } from "../ContextProvider/ContextProvider";
import { useContext } from "react";

function SingleProductsPage(){

const [Data,SetData]= useState([])
  const {id}= useParams();
  console.log(id);

const {cart,Setcart}= useContext(Context)


  function fetchadata(){
    
    return axios.get(`https://63c626b5dcdc478e15bc0778.mockapi.io/sdfg/e-commerce?id=${id}`);
    
    }
    
    useEffect(()=>{
    fetchadata().then(res=>{
        console.log(res.data)
      SetData(res.data)
      })
    },[])


    const BuyNow = (price,name,img,brand)=>{
       let obj={
        name ,
        img,
        price,
        brand,
        id
       }

  cart.forEach((item)=>{
     
    if(item.id == obj.id){
  alert("Item already In Cart")
    }else{
      Setcart([...cart,obj])
    }


  })


Setcart([...cart, obj])
      

    }


console.log(Data)

return <div>
   <NavBar/>

{ Data?.map((item)=>{
  return  <Box w="1150px" m='auto' mt='20px' fontFamily="Red Hat Display, sans-serif" >
  <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'20px'} color={'rgb(130, 130, 130)'} >
  
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>😎</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href={`/category/${item.category}`}>{item.category}</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href='#'  >{item.title}</BreadcrumbLink>
    </BreadcrumbItem>
  
  </Breadcrumb>
  
  <Box mt='20px'>
  
  <Flex >
    <Box w="500px">
  <Box w="500px" boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' p='10px' >
  
  <Image src={item.thumbnail} />
  
  </Box>
  <Button ml='100px' mt='20px'  w= '250px' h='50px' color='white' bg='#2A6462' _hover={{bg:"#2A6462"}} onClick={()=> BuyNow(item.price,item.title,item.thumbnail,item.brand,item.id)}  >Buy Now</Button>
  </Box>
  <Box ml='50px'>
  <Text fontSize={'22px'} lineHeight={'26px'}  fontWeight={'bold'}>{item.title}</Text>
  <Text fontSize={'26px'} mt='6px' lineHeight={'39px'} fontWeight={'bold'}>₹ {item.price}</Text>
  
  <HStack w='550px' mt='20px'>
  <Button w= '250px' h='50px' bg="#2E3192" color='white' _hover={{border:'1px solid #2E3192', color:'#2E3192', bg:'none'}} >Bulk Order</Button>
  <Spacer/>
  <Button w= '250px' h='50px' bg="none" color='#2A6462' border='1px solid #2A6462'  _hover={{bg:'#2A6462', color:'white'}} onClick={()=> BuyNow(item.price,item.title,item.thumbnail,item.brand,item.id)} >Buy Now</Button>
  </HStack>
  
  <Box mt='50px'>
  <Flex>
  <Box w='100px' boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' p='10px'  >
  <FcShipped size='60px' />
  </Box>
  
  <Box ml='20px'>
    <Text fontWeight={'bold'}>{item.brand}</Text>
    <Flex fontSize={'12px'} ><MdLocationOn /> Delhi</Flex>
    <Text>4.4/5 
  
   (22)</Text>
   <Stars stars={item.rating}/>
   <Flex fontSize={'12px'}><FcApproval pt='16px'/>GST - 07AASFN8141K1ZO</Flex>
  </Box>
  
  <Button borderRadius={'20px'} color={'#2A6462'} bg={'none'} border={'1px solid #2A6462'} _hover={{bg:'#2A6462', color:"white"}} ><VscSaveAll/> <Text ml='10px'>View All Products</Text></Button>
  
  </Flex>
  </Box>
  
  <Box border={'1px solid rgba(27, 31, 35, 0.15)'} borderLeft={'none'} borderRight={'none'} borderBottom={'none'} mt='20px'>
  
  <Text mt='30px' mb='10px' fontWeight={'bold'} color={'#4A4A4A'} >Details</Text>
  <Text>{item.description}</Text>
  
  </Box>
  
  </Box>
  </Flex>
  
  
  </Box>
  
  
  
  
  
  </Box>
})
  
 }

<Image w='800px' m='auto' mt='30px' borderRadius={'10px'} boxShadow= "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"  src={Banner} />

<Footer/>

</div>
};


export default SingleProductsPage;



