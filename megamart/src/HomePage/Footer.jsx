import {Box,HStack,UnorderedList,ListItem,Text,Spacer} from "@chakra-ui/react";


function Footer(){



    return <Box w="100%" h="200px" bg="#232324" mt='20px' color="#aaaaab" >




   <Box w="1245px" m='auto' pt="50px" >

<HStack w="1200px" spacing={"100px"} m='auto'   >

<UnorderedList>
<ListItem listStyleType={"none"}>About us</ListItem>
<ListItem listStyleType={"none"}>Join Sales</ListItem>
<ListItem listStyleType={"none"}>Press Section</ListItem>
<ListItem listStyleType={"none"}>Advertise with Us</ListItem>
<ListItem listStyleType={"none"}>Success Stories</ListItem>
<ListItem listStyleType={"none"}>Investor Section</ListItem>
</UnorderedList>


<UnorderedList>
<ListItem listStyleType={"none"}> Help</ListItem>
<ListItem listStyleType={"none"}>Feedback</ListItem>
<ListItem listStyleType={"none"}>Complaints</ListItem>
<ListItem listStyleType={"none"}>Join Sales</ListItem>
<ListItem listStyleType={"none"}>Success Stories</ListItem>
<ListItem listStyleType={"none"}>Advertise with Us</ListItem>
</UnorderedList>


<UnorderedList>
<ListItem listStyleType={"none"}>Suppliers Tool Kit</ListItem>
<ListItem listStyleType={"none"}>Buyers Tool Kit</ListItem>
<ListItem listStyleType={"none"}>Press Section</ListItem>
<ListItem listStyleType={"none"}>Post Your Requirement</ListItem>
<ListItem listStyleType={"none"}>Sell on IndiaMART</ListItem>
<ListItem listStyleType={"none"}>Investor Section</ListItem>
</UnorderedList>

<UnorderedList>
<ListItem listStyleType={"none"}>Buyers Tool Kit</ListItem>
<ListItem listStyleType={"none"}>Products You Buy</ListItem>
<ListItem listStyleType={"none"}>Ship With IndiaMART</ListItem>
<ListItem listStyleType={"none"}>Advertise with Us</ListItem>
<ListItem listStyleType={"none"}>Learning Centre</ListItem>
<ListItem listStyleType={"none"}>Latest BuyLead</ListItem>
</UnorderedList>

<UnorderedList>
<ListItem listStyleType={"none"}>Accounting Solutions</ListItem>
<ListItem listStyleType={"none"}>Success Stories</ListItem>
<ListItem listStyleType={"none"}>Latest BuyLead</ListItem>
<ListItem listStyleType={"none"}>Ship With IndiaMART</ListItem>
<ListItem listStyleType={"none"}>Products You Buy</ListItem>
<ListItem listStyleType={"none"}>GST e-Invoice</ListItem>

</UnorderedList>

</HStack>



   </Box>

<Box w="100%"  border="1px solid #aaaaab" h="50px" bg={"#232324"} borderBottom={"none"} borderLeft={"none"}
borderRight={"none"}
>

<HStack w="1100px" m='auto' pt='10px' >
<Text>Copyright © 1996-2023 IndiaMART InterMESH Ltd. All rights reserved.</Text>
<Spacer></Spacer>
<Text>Terms of Use - Privacy Policy - Link to Us</Text>
</HStack>

    
</Box>  


    </Box>

};

export default Footer;