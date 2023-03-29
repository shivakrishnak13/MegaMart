
import {Box,Input,Image,HStack,Text,Button,Icon} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import SuperMart from "../Logos/SuperMart.svg"
import {MdLocationPin,MdOutlineSell} from "react-icons/md";
import {HiShoppingCart} from "react-icons/hi"
import { BiHelpCircle } from "react-icons/bi";
import { TbMessageDots,TbUserCircle } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";

function NavBar(){




    return <Box w="100%" h="50px" backgroundColor={"#2E3192"}  position= "sticky"
    top="0" zIndex={"10"}>
        <HStack>
       <Image src={SuperMart} alt={"logo"} boxSize="200px" position={"relative"} bottom="68px"  />
       <HStack>
        <Box w="200px" h="35px"
         backgroundColor={"white"}
          position={"relative"}
           bottom="75px" left="20px"
           borderTopLeftRadius={"5px"}
           borderBottomLeftRadius={"5px"}
        >
            <Text fontWeight={"bold"} mt="6px">
            <Icon as={MdLocationPin}/>
                All India 
                <Icon as={FiChevronDown} ml="10px" pt="5px"/>
                </Text>
        </Box>
        <Input h="35px" position={"relative"} bottom="75px" borderRadius={"0px"} left="10px" backgroundColor={"white"}
        placeholder="Enter Product / Service to Search"
       _focus={{
        outline:"none",
        borderColor: "white"
       }}
        />
        <Box w="200px" h="35px" backgroundColor={"#00A699"} position={"relative"} bottom="75px"
        borderTopRightRadius={"5px"}
        borderBottomRightRadius={"5px"}
        >
           <Text  mt="6px" color={"white"}

           >
            <SearchIcon mr="7px"/>
           
            Search</Text> 
        </Box>
       </HStack>
  
  <Button
  position={"relative"} bottom="75px" borderRadius={"2px"} left="30px" h="35px"
  >Get Best Price</Button>


<HStack position={"relative"} left="350px" bottom="75px" color={"#E0E0E0"} spacing="20px" >

<Box _hover={{
    color: "white",
    cursor : "pointer"
    
}}>
<Icon as={MdOutlineSell} boxSize="20px" position={"relative"} top="5px"  />
<Text fontSize={"13px"}>Sell</Text>
</Box>

<Box _hover={{
    color: "white",
    cursor : "pointer"
}}>
    <Icon as={HiShoppingCart} boxSize="20px" position={"relative"} top="5px" />
<Text fontSize={"13px"}>Cart</Text>
</Box>
<Box _hover={{
    color: "white",
    cursor : "pointer"
}}>
    <Icon as={BiHelpCircle} boxSize="20px" position={"relative"} top="5px"  />
<Text fontSize={"13px"}>Help</Text>
</Box>
<Box _hover={{
    color: "white",
    cursor : "pointer"
}}>
    <Icon as={TbMessageDots} boxSize="20px" position={"relative"} top="5px" />
<Text fontSize={"13px"}>Messages</Text>
</Box>
<Box _hover={{
    color: "white",
    cursor : "pointer"
}}>
    <Icon as={TbUserCircle} boxSize="20px" position={"relative"} top="5px" />
<Text fontSize={"13px"}>Login</Text>
</Box>
</HStack>
</HStack>
    </Box>
};

export default NavBar;