import {Box,Image} from "@chakra-ui/react";
import { useEffect,useState } from "react";


function ScrollBar(){
const [image,Setimage]= useState("")


    const array=[
        
        "https://rukminim1.flixcart.com/fk-p-flap/3200/1450/image/9ec4d51cdc77a1f7.jpg?q=90",
        "https://rukminim1.flixcart.com/fk-p-flap/3200/1450/image/ce9dffbb543016e6.jpg?q=90",
        "https://rukminim1.flixcart.com/fk-p-flap/3200/1450/image/0a96af8f7e697837.jpg?q=90",
        "https://rukminim1.flixcart.com/fk-p-flap/3200/1450/image/f53d5381fde45c21.jpg?q=90",
        "https://rukminim1.flixcart.com/fk-p-flap/3200/1450/image/98fc026ca4220482.jpg?q=90"
       

    ]

const SlideShow=()=>{

 let index=0;

 setInterval(() => {
    
    Setimage(array[index])

    index++;

    if(index===array.length){
        index=0;
    }

 }, 2000);


}

useEffect(()=>{
    SlideShow();
},[])

    return <Box w="80%" m="auto">

<Image src={image} zIndex={"-1"} w="1245px" />

<Image src="https://shopping.imimg.com/style/stmbnr_D1.webp" position="relative" top="10px" w="1245px"/>
    </Box>
};

export default ScrollBar;