import NavBar from "../HomePage/NavBar";
import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,HStack,Image,Text,Heading,Flex,Button,Spacer,Grid,GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {FcShipped,FcApproval} from "react-icons/fc"
import {MdLocationOn} from "react-icons/md"
import {VscSaveAll} from 'react-icons/vsc'
import { useParams } from "react-router-dom";
import FeaturedProducts from "../HomePage/FeaturedProducts";
import Footer from "../HomePage/Footer"
import { useNavigate } from "react-router-dom";

function BeautySinglePage(){

const navigate = useNavigate()

    let prod=[
        {
            id:1,
            title : "Combo Balm Matte Lipstick(set Of-12) And Kajalnbsp;nbsp;(13 Items In The Set)",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/IJ/AC/PY/67991053/1626955709377-2-23-lenonbeautyadsbalmlipsticksdl5357974061eeb93-originnm80prcnt-500x500.webp",
            price : "369",
            brand : "Store Apt"
        },
        {
            id:2,
            title : "Spectral Mini Gel Colour Lilac",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/12/JI/UN/IE/111907473/1637350646255-sku-1885-0-500x500.jpeg",
            price : "85",
            brand : "Parshwa Cakes Delight"
        },
        {
            id:3,
            title : "Biotique Bio Pearl White Facial Kit (65gm)",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/8/ZV/SU/QF/7304076/pearl-facial-kit-65g-op01-500x500.jpg",
            price : "250",
            brand : "Green Leaf"
        },
        {
            id:4,
            title : "Adivasi Red Onion Hair Growth And Hair Fall Control Kit 200ml ( 100% Organic And Natural )",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/1/YQ/GG/LC/181316483/1673087641982-sku-16137-0-500x500.jpg",
            price : "118",
            brand : "Instaecart Solutions"
        },
        {
            id:5,
            title : "Green Tea Extra Matte Lipsticks - Pack Of 12",
            img : "https://5.imimg.com/data5/ECOM/Default/2022/7/EY/TG/DC/111702099/1566815252968-ads-green-tea-lipsticks-originnm80prcnt-1000x1000.jpg",
            price : "245",
            brand : "Mishka Enterprises"
        }
    ]


const {id} = useParams()

let data= prod.filter((item)=>{
    return item.id==id
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
       onClick={()=>navigate(`/product/beauty/${item.id}`)}
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


export default BeautySinglePage;



