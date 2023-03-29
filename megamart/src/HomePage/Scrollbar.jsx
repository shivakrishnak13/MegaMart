import {Box,Heading,Image} from "@chakra-ui/react";
import { useEffect,useState } from "react";


function ScrollBar(){
const [image,Setimage]= useState("")


    const array=[
        
        "https://shopping.imimg.com/style/bnr_D.webp",
       

    ]

const SlideShow=()=>{

 let index=0;

 setInterval(() => {
    
    Setimage(array[index])

    index++;

    if(index==array.length){
        index=0;
    }

 }, 2000);


}

useEffect(()=>{
    SlideShow();
},[])

    return <Box w="80%" m="auto">

<Image src={image} zIndex={"-1"} />

<Image src="https://shopping.imimg.com/style/stmbnr_D1.webp" position="relative" top="10px" w="1245px"/>
    </Box>
};

export default ScrollBar;