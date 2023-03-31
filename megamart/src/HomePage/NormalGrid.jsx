import { HStack,Box,Image,Heading,Grid,GridItem,Text, } from "@chakra-ui/react";

function NormalGrid({data}){

const {mens}= data;

console.log(mens)
return <Box w="1245px" m="auto">
 <HStack mt="60px" mb="20px" fontFamily="Red Hat Display, sans-serif">
         <Box w="50px" h="50px" borderRadius={"50%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"  >
            <Image src="https://shopping.imimg.com/style/men-wear.png" mt="7px" ml="10px" />
         </Box>
         <Heading size={"lg"} textAlign={"start"} fontFamily="Red Hat Display, sans-serif" fontWeight={"bold"}>Mens Wear</Heading>
      </HStack>


      <Grid  h='200px'
  templateColumns='repeat(5, 1fr)'
  gap={4} >





    <GridItem>
    <Box  w="225px"  h="340px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 
  textAlign="center"
   >
   <Image src="https://5.imimg.com/data5/ECOM/Default/2023/3/295609530/PL/VJ/OX/90086993/mmf0256-1-500x500.jpg" p="15px" w="100%" h="230px"  />

   <Text textAlign={"start"} fontSize="15px" fontWeight={"700"} color="#111" mt="6px" ml="15px" whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis" >Millennial Men Beige Cotton Full Sleeves Shirt</Text>

   <Text textAlign={"start"} mt="10px" fontSize={"13px"}
   fontWeight="400" color={"rgb(69, 70, 71)"} ml="15px"
   whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis"
   >NOZ2TOZ</Text>

   <Text textAlign={"start"} mt="10px" color={"rgb(46, 49, 146)"} fontSize="20px" fontWeight={"bold"} ml="15px" >₹ 1,087
</Text>
   
   
   </Box> 
    </GridItem>
    </Grid>
    
</Box>
};


export default NormalGrid;