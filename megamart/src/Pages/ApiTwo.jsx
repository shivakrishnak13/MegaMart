import NavBar from "../HomePage/NavBar";
import {Box,Text,Grid,Image,Button,Skeleton, SkeletonText,Select} from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ApitwoPage(){

    const [Data,SetSData]= useState([])
    const [Loading,SetLoading]= useState(true);
    const {cat} = useParams();
    const Link = useNavigate()
const [sort,setsort]=useState("")
    console.log(cat)

function fetchadata(sort){
    
return axios.get(`https://63c626b5dcdc478e15bc0778.mockapi.io/sdfg/e-commerce?category=${cat}&sortby=price&order=${sort}`)

}

useEffect(()=>{
fetchadata(sort).then(res=>{
    console.log(res.data)
    SetLoading(false)
    SetSData(res.data)
  })
},[sort])

    const HandleClick=(id)=>{

Link(`/products/${id}`)

    }

    console.log(Data)

    
        
    
    let array=[]
        for(let i=0;i<30;i++){
            array[i]=i;
        }
       
      
    
console.log(sort)

return <div>
<NavBar/> 


<Box w='100%' mt='20px'>
<Select placeholder="Sort By Price" w='200px' m='auto' onChange={(e)=>setsort(e.target.value)} >
<option value='asc'>Low - High</option>
  <option value='desc'>High - Low</option>
 
</Select>
</Box>


<Box w="1245px" m="auto" mt="20px" fontFamily="Red Hat Display, sans-serif"  >

<Grid 
  templateColumns='repeat(5, 1fr)'
  gap={4}
>

{Loading? (array.map((item,i)=>{
    return <Box key={i} w="225px"  h="390px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 

 
    >
    <Skeleton m='auto' p="30px" w="80%" h="200px"  />
 
    <SkeletonText textAlign={"start"} fontSize="15px" fontWeight={"700"} color="#111" mt="6px" ml="15px" />
 
    <SkeletonText textAlign={"start"} mt="10px" fontSize={"13px"}
    fontWeight="400" color={"rgb(69, 70, 71)"} ml="15px"/>
 
    <SkeletonText  mt="10px"  ml="15px" ></SkeletonText>
    
    <Skeleton w="90%"  border={"1px solid  rgb(46, 49, 146)"} fontWeight="700" mt="10px"  ></Skeleton>
    </Box> 
}
    ))

:   ( Data?.map((item)=>{
  return <Box key={item.id} w="225px"  h="390px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 
  textAlign="center"
  cursor={'pointer'}
  onClick={()=>HandleClick(item.id)}
   >
   <Image src={item.thumbnail} p="15px" w="100%" h="230px"  />

   <Text textAlign={"start"} fontSize="15px" fontWeight={"700"} color="#111" mt="6px" ml="15px" whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis" >{item.title}</Text>

   <Text textAlign={"start"} mt="10px" fontSize={"13px"}
   fontWeight="400" color={"rgb(69, 70, 71)"} ml="15px"
   whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis"
   >{item.brand} </Text>

   <Text textAlign={"start"} mt="10px" color={"rgb(46, 49, 146)"} fontSize="20px" fontWeight={"bold"} ml="15px" >₹ {item.price}</Text>
   
   <Button w="90%"  background={"none"} color=" rgb(46, 49, 146)" border={"1px solid  rgb(46, 49, 146)"} fontWeight="700" _hover={{backgroundColor:" rgb(46, 49, 146)", color:"white"}} mt="10px" onClick={()=>console.log(item.id)} >Buy Now</Button>
   </Box> 
})
)
}



</Grid>







</Box>





</div>
}




export default ApitwoPage;