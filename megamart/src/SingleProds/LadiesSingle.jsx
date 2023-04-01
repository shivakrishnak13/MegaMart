import NavBar from "../HomePage/NavBar";
import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,HStack,Image,Text,Heading,Flex,Button,Spacer } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {FcShipped,FcApproval} from "react-icons/fc"
import {MdLocationOn} from "react-icons/md"
import {VscSaveAll} from 'react-icons/vsc'
import { useParams } from "react-router-dom";
import FeaturedProducts from "../HomePage/FeaturedProducts";
import Footer from "../HomePage/Footer"

function FeaturedProductsPage(){



    let prod=[
        {
            id:1,
            title : "Ritsila Women's Fit And Flare Fancy Western Polyester Midi Dress",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/295495067/YO/PF/OR/89757443/3j1a1860copy-500x500.jpg",
            price: "499",
            brand :"Vool Fashion",
        },
        {
            id:2,
            title : "Girls Maroon & White Printed Basic Jumpsuit",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/1/FW/DO/VD/90086993/5497869-75243ebb-44aa-48ae-b823-8f1dde0a1f8e-1000x1000.png",
            price: "1,002",
            brand :"NOZ2TOZ",
        },
        {
            id:3,
            title : "Maroon Cotton Maxi Dress",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/1/SH/XT/XV/35667744/kk-8-1000x1000.jpg",
            price: "4,050",
            brand :"Siabhi Studios",
        },
        {
            id:4,
            title : "Pink Women's Jumpsuit Dress",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/PD/TD/EX/8530435/wwj03i-4-1000x1000.jpg",
            price: "599",
            brand :"Yelloe Designs Inc.",
        },
        {
            id:5,

            title : "Vimla Women's Multicolord Khadi Cotton Printed Saree With Blouse Piece(crystal M-004_dark Blue)",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/1/DF/PV/EK/60172448/crystal-20m-004-dark-20blue-20-d52bc133-62b2-44e7-ac2c-21c2d195d2fd-1000x1000.jpg",
            price: "349",
            brand :"Vimla Prints",
        },
        {
            id:6,
            title : "Pink Color Beautiful Paithani Occasional Wear Saree",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/294616602/OW/GX/TB/146664718/photo-2023-01-16-11-00-04-1000x1000.jpg",
            price: "2,499",
            brand :"Ahesas Fashion",
        },
        {
            id:7,
            title : "Solid Lycra Plain Jumpsuit",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/3/UR/WS/BV/149051703/lycra-plain-jumpsuit-blue-1000x1000.jpg",
            price: "679",
            brand :"Minies E-Retail LLP",
        },
        {
            id:8,
            title : "Pure Soft Cotton Beautiful Designe Leheriya Petrn Saree, Or, Amt",
            img : "https://5.imimg.com/data5/ECOM/Default/2023/2/IR/JA/HK/49644284/img-20230126-wa0018-1000x1000.jpg",
            price: "599",
            brand :"Khatushyam Creations",
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

<FeaturedProducts/>
<Footer/>

</div>
};


export default FeaturedProductsPage;



