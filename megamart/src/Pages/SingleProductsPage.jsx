import NavBar from "../HomePage/NavBar";
import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,HStack,Image,Text,Heading,Flex,Button,Spacer } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {FcShipped,FcApproval} from "react-icons/fc"
import {MdLocationOn} from "react-icons/md"
import {VscSaveAll} from 'react-icons/vsc'



function SingleProductsPage(){

return <div>
   <NavBar/>

<Box w="1150px" m='auto' mt='20px' fontFamily="Red Hat Display, sans-serif" >
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} fontSize={'20px'} color={'rgb(130, 130, 130)'} >

  <BreadcrumbItem>
    <BreadcrumbLink href='/'>😎</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'  >About</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>

<Box mt='20px'>

<Flex >
  <Box w="500px">
<Box w="500px" boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' p='10px' >

<Image src="https://5.imimg.com/data5/ECOM/Default/2023/1/PA/VR/KU/779497/1650347692818-sku-0046-0-1000x1000.png" />

</Box>
<Button ml='100px' mt='20px'  w= '250px' h='50px' color='white' bg='#2A6462' _hover={{bg:"#2A6462"}}  >Buy Now</Button>
</Box>
<Box ml='50px'>
<Text fontSize={'22px'} lineHeight={'26px'}  fontWeight={'bold'}>Peri Peri Sauce</Text>
<Text fontSize={'26px'} mt='6px' lineHeight={'39px'} fontWeight={'bold'}>₹ 235 / Pack</Text>

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
  <Text fontWeight={'bold'}>NOZ2TOZ</Text>
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
</div>
};


export default SingleProductsPage;



