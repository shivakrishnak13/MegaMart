
import { Box, Input, Image, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SuperMart from "../Logos/SuperMart.svg"
import { MdLocationPin, MdOutlineSell } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi"
import { BiHelpCircle } from "react-icons/bi";
import { TbMessageDots, TbUserCircle } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {

    const login = useNavigate();



    return <Box w="100%" h="55px" backgroundColor={"#2E3192"} position="sticky" display={'flex'} justifyContent={'center'}
        top="0" zIndex={"20"} >
        <HStack>
            <Image src={SuperMart} alt={"logo"} w={'200px'} mt='10px' />
            <HStack spacing={'0'}>
                <Box w="200px" h="35px"
                    backgroundColor={"white"}
                    //   position={"relative"}
                    //    bottom="75px" left="20px"
                    borderTopLeftRadius={"5px"}
                    borderBottomLeftRadius={"5px"}
                >
                    <Text fontWeight={"bold"} mt="6px" backgroundColor="white">
                        <Icon as={MdLocationPin} />
                        All India
                        <Icon as={FiChevronDown} ml="10px" pt="5px" />
                    </Text>
                </Box>
                <Input h="35px" borderRadius={"0px"} backgroundColor={"white"}
                    placeholder="Enter Product / Service to Search"
                    _focus={{
                        outline: "none",
                        borderColor: "white"
                    }}
                />
                <Box w="200px" h="35px" backgroundColor={"#00A699"}
                    borderTopRightRadius={"5px"}
                    borderBottomRightRadius={"5px"}
                >
                    <Text  ml="18px" mt="6px" color={"white"}

                    >
                        <SearchIcon mr="7px" />

                        Search</Text>
                </Box>
            </HStack>

            <Button
                borderRadius={"2px"} left="30px" h="35px"
            >Get Best Price</Button>


            <HStack color={"#E0E0E0"} spacing="20px" pl="270px" pr={'42'} marginLeft={'230'} >

                <Box _hover={{
                    color: "white",
                    cursor: "pointer"

                }}>
                    <Icon as={MdOutlineSell} boxSize="20px" position={"relative"} top="5px" />
                    <Text fontSize={"13px"}>Sell</Text>
                </Box>

                <Box _hover={{
                    color: "white",
                    cursor: "pointer"
                }}>
                    <Icon as={HiShoppingCart} boxSize="20px" position={"relative"} top="5px" />
                    <Text fontSize={"13px"}>Cart</Text>
                </Box>
                <Box _hover={{
                    color: "white",
                    cursor: "pointer"
                }}>
                    <Icon as={BiHelpCircle} boxSize="20px" position={"relative"} top="5px" />
                    <Text fontSize={"13px"}>Help</Text>
                </Box>
                <Box _hover={{
                    color: "white",
                    cursor: "pointer"
                }}>
                    <Icon as={TbMessageDots} boxSize="20px" position={"relative"} top="5px" left='15px' />
                    <Text fontSize={"13px"}>Messages</Text>
                </Box>
                <Box onClick={()=>login('/login')}  _hover={{
                    color: "white",
                    cursor: "pointer"
                }}>
                    <Icon as={TbUserCircle} boxSize="20px" position={"relative"} top="5px" left='5px' />
                    <Text fontSize={"13px"} >Login</Text>
                </Box>
            </HStack>
        </HStack>
    </Box>
};

export default NavBar;