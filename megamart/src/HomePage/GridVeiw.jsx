import { Grid, GridItem, Box, Image, Heading, HStack,Text, Button } from "@chakra-ui/react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";



function GridVeiw({data}) {

   

const{
   title1,title2,title3,title4,title5,title6,title7,title8,brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,price1,price2,price3,price4,price5,price6,price7,price8,logo,category,img1,img2,img3,img4,img5,img6,img7,img8
} = data;

const navigate = useNavigate();
const link = useNavigate()

let cat=""
if(category == "Ladies Wear"){
  cat="womens"
}else if (category== "Footwear"){
   cat= "shoes"
}else if (category=="Mobile Accessories"){
   cat= "mobileaccesories"
}

   return <div>
    <Box w="1245px" m="auto" mt="30px" h="1050px" fontFamily="Red Hat Display, sans-serif" >


      <HStack mt="60px" mb="20px" _hover={{
   cursor: "pointer"
}}>
         <Box w="50px" h="50px" borderRadius={"50%"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" _hover={{
   cursor: "pointer"
}}  >
            <Image src={logo} mt="7px" ml="10px" _hover={{
   cursor: "pointer"
}} />
         </Box>
         <Heading size={"lg"} textAlign={"start"} fontFamily="Red Hat Display, sans-serif" fontWeight={"bold"}>{category}</Heading>
      </HStack>



      <Grid
         h='200px'
         templateRows='repeat(3, 1fr)'
         templateColumns='repeat(5, 1fr)'
         gap={4}
         _hover={{
            cursor: "pointer"
         }}
      >
        <GridItem 
            w="230px"
            h="350px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/1')} >
               <Image src={img1}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title1}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand1}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price1}</Text>
         </GridItem>

         <GridItem 
            w="230px"
            h="350px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/2')}  >
               <Image src={img2}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title2}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand2}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price2}</Text>
         </GridItem>

         <GridItem
            colStart={3} colEnd={5}
            rowStart={1} rowEnd={3}
            h="600px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            w="100%" h="80%" borderRadius={"7px"}
            onClick={()=>navigate('/product/3')}
            >
               <Image src={img3}  w="90%" h="100%" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="90%"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title3}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand3}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price3}</Text>
         </GridItem>


          <GridItem 
            w="230px"
            h="350px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/4')}  >
               <Image src={img4}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title4}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand4}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price4}</Text>
         </GridItem>


         <GridItem
             colStart={1} colEnd={3}
             rowStart={2} rowEnd={4}
            h="600px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            w="100%" h="80%" borderRadius={"7px"} onClick={()=>navigate('/product/5')}
            >
               <Image src={img5}  w="80%" h="100%" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="90%"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title5}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand5}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price5}</Text>
         </GridItem>

          <GridItem 
            w="230px"
            h="350px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/6')}  >
               <Image src={img6}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title6}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand6}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price6}</Text>
         </GridItem>

          <GridItem 
            w="230px"
            h="350px"
            position={"relative"}
            bottom="119px"
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/7')}  >
               <Image src={img7}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title7}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand7}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price7}</Text>
         </GridItem>

          <GridItem 
            w="230px"
            h="350px"
            position={"relative"}
            bottom="119px"
            
         >
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="210px" h="230px" borderRadius={"7px"} onClick={()=>navigate('/product/8')} >
               <Image src={img8}
                  w="180px"
                  h="230px" m="auto" />
            </Box>
            <Text textAlign={"start"} lineHeight="18px" fontSize={"18px"} color="rgb(17, 17, 17)" fontWeight={"500"}  mt="10px"
             whiteSpace={"nowrap"} width="200px"  h="30px" overflow={"hidden"} textOverflow="ellipsis" 
            >{title8}</Text>
            <Text textAlign={"start"} fontSize="13px" fontWeight={"400"} color="rgb(69, 70, 71)"  >{brand8}</Text>
            <Text textAlign={"start"} fontSize="20px" color={"rgb(46, 49, 146)"} fontWeight="900" >₹ {price8}</Text>
         </GridItem>



      </Grid>

      

   </Box>
   <Button h="50px" ml="43%" w="250px" bg={"#1A237E"} color="white" fontSize={"20px"} fontWeight="500" p="5px" _hover={{
      bg: "#2E3192"
   }}
   onClick={()=> link(`/category/${cat}`)}
   >View More</Button>
   </div>
};


export default GridVeiw;

