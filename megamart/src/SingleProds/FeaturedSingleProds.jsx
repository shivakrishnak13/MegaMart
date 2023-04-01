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
            title:"Peri Peri Sauce",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/PA/VR/KU/779497/1650347692818-sku-0046-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price: 235
        },
        {
            id:2,
            title:"0282b Flexible Mobile Stand Multi Angle Adjustment With 360",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/3/EK/DF/OY/97517045/whatsappimage2023-02-01at9-57-06am-500x500.jpg",
            brand:"Deodap International Private Limited",
            price:42
        },
        {
            id:3,
            title:"Sweet Imli Sauce",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/SY/GI/QT/779497/1650347695668-sku-0039-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price:106
        },
        {
            id:4,
            title:"4472a Bullet Train Play Set High Speed Train Play Set For Kids & Children",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/3/ND/AB/YU/97517045/01-32fb843a-1474-4997-bc81-faac23074845-1000x1000.jpg",
            brand:"Deodap International Private Limited",
            price:97
        },
        {
            id:5,
            title:"Thousand Island Dip",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/FL/KE/DJ/779497/1650347698709-sku-0104-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price:177
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



