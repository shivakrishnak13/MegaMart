import { Box,Image,HStack,Menu,MenuButton,MenuItem,MenuList,Button } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';

function BelowNav(){

    
const navigate= useNavigate()

    return <Box w="75%" m="auto" >
        <HStack  spacing={"30px"} mt="20px">

     <Box  _hover={{cursor:"pointer"}}>
        <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" position="relative" bottom={"6px"} onClick={()=>navigate('/category/womens')} >
        <Image src="https://shopping.imimg.com/style/ladies-wear.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"}   />
        </Box>
        
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none"  _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif"   >
     Ladies Wear
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif"  >
    <MenuItem>Coats & Outerwear</MenuItem>
    <MenuItem>Jeans</MenuItem>
    <MenuItem>T-Shirts</MenuItem>
    <MenuItem>Pants</MenuItem>
    <MenuItem>Bras, Panties & Lingerie</MenuItem>
  </MenuList>
  </Menu>
     </Box>

     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/mens_fashion')}  >
        <Image src="https://shopping.imimg.com/style/men-wear.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
        
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif"
  
  >
    Men Wear
  </MenuButton  >
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
    <MenuItem>Denim Shop</MenuItem>
    <MenuItem>The Culture Shop</MenuItem>
    <MenuItem>Fan Gear</MenuItem>
    <MenuItem>T-Shirts</MenuItem>
    <MenuItem>Jeans</MenuItem>
  </MenuList>
  </Menu>
     </Box>


    <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"}  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/shoes')}>
        <Image src="https://shopping.imimg.com/style/footwear.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
        
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
     Footwear
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Shoes</MenuItem>
    <MenuItem>New Arrival</MenuItem>
    <MenuItem>Desinger</MenuItem>
    <MenuItem>Denim Shop</MenuItem>
    <MenuItem>Outdoor Shop</MenuItem>
  </MenuList>
  </Menu>
     </Box>
   

     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/beautyproducts')} >
        <Image src="https://shopping.imimg.com/style/beauty-products.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
       
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
     Beauty <br /> Products
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Face Makeup</MenuItem>
    <MenuItem>Lips Sticks</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Watches</MenuItem>
    <MenuItem>Facewash</MenuItem>
  </MenuList>
  </Menu>
     </Box>


     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/mobileaccesories')}>
        <Image src="https://shopping.imimg.com/style/mobile-accessories.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
       
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
    Mobile <br/> Accessories
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Android</MenuItem>
    <MenuItem>iPhone</MenuItem>
    <MenuItem>Headphone</MenuItem>
    <MenuItem>Tablets</MenuItem>
    <MenuItem>Ipods</MenuItem>
  </MenuList>
  </Menu>
     </Box>


     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/homedecor')} >
        <Image src="https://shopping.imimg.com/style/home-decor.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
        
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="20px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
     Home Decor
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Carpet</MenuItem>
    <MenuItem>Shofa</MenuItem>
    <MenuItem>Bedsheets</MenuItem>
    <MenuItem>Furniture</MenuItem>
    <MenuItem>Appliances</MenuItem>
  </MenuList>
  </Menu>
     </Box>


     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" onClick={()=>navigate('/category/jewellery')}>
        <Image src="https://shopping.imimg.com/style/artificial-jewellery.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
       
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="15px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
     Artificial <br /> Jwellery
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Menu>
     </Box>

     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" > 
        <Image src="https://shopping.imimg.com/style/fertilizer.png" alt="" position={"relative"} top="13px" left="18px" zIndex={"-1"} />
        </Box>
       
        <Menu>
  <MenuButton as={Button} zIndex={"11"} background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" right="15px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif" >
     Fertilizer
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Menu>
     </Box>


     <Box _hover={{cursor:"pointer"}}>
     <Box w="70px" h="60px" borderRadius={"50%"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
        <Image src="https://shopping.imimg.com/style/light.png" alt="" position={"relative"} top="13px" left="18px"  />
        </Box>
       
        <Menu>
  <MenuButton as={Button}  background="none" _hover={{
   background:"none"
  }} mt="12px" lineHeight={"20px"} position="relative" bottom="5px" fontWeight={"light"} fontFamily="Red Hat Display, sans-serif"  >
     Light
  </MenuButton>
  <MenuList fontWeight={"light"} fontFamily="Red Hat Display, sans-serif">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Menu>
     </Box>

     </HStack>
    </Box>
};

export default BelowNav;