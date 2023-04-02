import { HStack,Box,Image,Heading,Grid,GridItem,Text,Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NormalGrid({data}){


const navigate = useNavigate();

let cat="";

if(data.category == "Men Wear"){
   cat="mens_fashion"
}else if(data.category == "Beauty Products"){
   cat="beautyproducts"
}else if (data.category == "Home Decor"){
   cat="homedecor"
}

return <Box w="1245px" m="auto" >
 <HStack mt="60px" mb="20px" fontFamily="Red Hat Display, sans-serif">
         <Box w="50px" h="50px" borderRadius={"50%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"  >
            <Image src={data.logo} mt="7px" ml="10px" />
         </Box>
         <Heading size={"lg"} textAlign={"start"} fontFamily="Red Hat Display, sans-serif" fontWeight={"bold"}>{data.category}</Heading>
      </HStack>


      <Grid  h='380px'
  templateColumns='repeat(5, 1fr)'
  gap={4}  >

{
   data.data.map((item)=>{
      return(
         <GridItem key={item.id}>
         <Box  w="225px"  h="340px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 
       textAlign="center"
       fontFamily="Red Hat Display, sans-serif"
       onClick={()=>navigate(`/product/${data.route}/${item.id}`)}
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
    
    <Button h="50px" ml="42%" w="250px" bg={"#1A237E"} color="white" fontSize={"20px"} fontWeight="500" p="5px" _hover={{
      bg: "#2E3192" 
   }} 
   onClick={()=> navigate(`/category/${cat}`)}
   >View More</Button>

</Box>
};


export default NormalGrid;