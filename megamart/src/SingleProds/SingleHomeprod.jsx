import NavBar from "../HomePage/NavBar";
import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,HStack,Image,Text,Flex,Button,Spacer,Grid,GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {FcShipped,FcApproval} from "react-icons/fc"
import {MdLocationOn} from "react-icons/md"
import {VscSaveAll} from 'react-icons/vsc'
import { useParams } from "react-router-dom";

import Footer from "../HomePage/Footer"
import { useNavigate } from "react-router-dom";

function HomeProdSingle(){

const navigate = useNavigate()

    let prod=[
        {
            id:1,
            title : "Combo Balm Matte Lipstick(set Of-12) And Kajalnbsp;nbsp;(13 Items In The Set)",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/11/SE/VW/KP/64575997/4-e092342f-c8b7-4985-8ec7-456a79fe1f93-500x500.jpg",
            price : "4,999",
            brand : "Swasti Sales"
        },
        {
            id:2,
            title : "1640 Girl Musician Playing Pen Stand Showpiece",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/12/QG/GY/OW/161152847/whatsappimage2021-06-05at5-28-33pm-500x500.jpg",
            price : "138",
            brand : "S S Marketing"
        },
        {
            id:3,
            title : "Microfiber Quilt For Heavy Winter, Double Bed Razai (90x90 Inches)",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/9/SW/TK/OU/26954735/51tic1spyhl-500x500.jpg",
            price : "1,899",
            brand : "A To Z Overseas"
        },
        {
            id:4,
            title : "Abstract Stylish Wooden Wall Clock",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/291952627/JM/ZP/HF/186159128/7-5-500x500.jpg",
            price : "1,399",
            brand : "Macklet"
        },
        {
            id:5,
            title : "Symphony Wall Art",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/1/BJ/VX/ME/2403926/whatsapp-image-2021-10-26-at-1-18-31-am-500x500.jpg",
            price : "5,400",
            brand : "Shiraz Handicrafts"
        }
    ]


const {id} = useParams()

let data= prod.filter((item)=>{
    return item.id===id
})




return <div>
   <NavBar/>

{
    data.map((item)=> (

<Box key={item.id} w="1150px" m='auto' mt='20px' fontFamily="Red Hat Display, sans-serif" >
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'15px'} color={'black'} >

  <BreadcrumbItem>
    <BreadcrumbLink href='/'>😎</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem  isCurrentPage>
    <BreadcrumbLink href='#'  >{item.title}</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>

<Box mt='20px'>

<Flex >
  <Box w="500px">
<Box w="500px" boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' p='10px' >

<Image src={item.img} />

</Box>
<Button ml='100px' mt='20px'  w= '250px' h='50px' color='white' bg='#2A6462' _hover={{bg:"#2A6462"}}  >Buy Now</Button>
</Box>
<Box ml='50px'>
<Text fontSize={'22px'} lineHeight={'26px'}  fontWeight={'bold'}>{item.title}</Text>
<Text fontSize={'26px'} mt='6px' lineHeight={'39px'} fontWeight={'bold'}>₹ {item.price} / Pack</Text>

<HStack w='550px' mt='20px'>
<Button w= '250px' h='50px' bg="#2E3192" color='white' _hover={{border:'1px solid #2E3192', color:'#2E3192', bg:'none'}} >Bulk Order</Button>
<Spacer/>
<Button w= '250px' h='50px' bg="none" color='#2A6462' border='1px solid #2A6462'  _hover={{bg:'#2A6462', color:'white'}}  >Buy Now</Button>
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
★★★★★
 (22)</Text>
 <Flex fontSize={'12px'}><FcApproval pt='16px'/>GST - 07AASFN8141K1ZO</Flex>
</Box>

<Button borderRadius={'20px'} color={'#2A6462'} bg={'none'} border={'1px solid #2A6462'} _hover={{bg:'#2A6462', color:"white"}} ><VscSaveAll/> <Text ml='10px'>View All Products</Text></Button>

</Flex>
</Box>

<Box border={'1px solid rgba(27, 31, 35, 0.15)'} borderLeft={'none'} borderRight={'none'} borderBottom={'none'} mt='20px'>

<Text mt='30px' mb='10px' fontWeight={'bold'} color={'#4A4A4A'} >Details</Text>
<Text>
PRODUCT DETAILS - Black solid a-line dress Round neck Sleeveless, no sleeves Maxi length in flared hem Liva fabric Comes with a jacket Material & Care 100% Viscose Rayon, Hand Wash

CATEGORY - Dresses

SLEEVES - Sleeveless

NECK - Round Neck
<br/>
PRINT - Solid

WORK - Solid

LENGTH - Maxi

KURTA STYLE - A-Line

BOTTOM STYLE -

CLOSER TYPE -


SKU : 9689DRSBKS
Weight : 380 g</Text>

</Box>

</Box>
</Flex>


</Box>





</Box>


    ))}



<Grid  h='380px' w="1150px"
  templateColumns='repeat(5, 1fr)'
  gap={5} m='auto' mt='20px' >

{
   prod.map((item)=>{
      return(
         <GridItem key={item.id}>
         <Box  w="225px"  h="340px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 
       textAlign="center"
       fontFamily="Red Hat Display, sans-serif"
       onClick={()=>navigate(`/product/home/${item.id}`)}
        >
        <Image src={item.img} p="15px" w="100%" h="230px"  />
     
        <Text textAlign={"start"} fontSize="15px" fontWeight={"700"} color="#111" mt="6px" ml="15px" whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis" >{item.title}</Text>
     
        <Text textAlign={"start"} mt="10px" fontSize={"13px"}
        fontWeight="400" color={"rgb(69, 70, 71)"} ml="15px"
        whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis"
        >{item.brand}</Text>
     
        <Text textAlign={"start"} mt="10px" color={"rgb(46, 49, 146)"} fontSize="20px" fontWeight={"bold"} ml="15px" >₹ {item.price}
     </Text> 
        </Box> 
         </GridItem>
      )
   })
}

    </Grid>
<Footer/>

</div>
};


export default HomeProdSingle;



