
import { Heading,Text,Box,Image,Button,SimpleGrid } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
function FeaturedProducts(){

    const nav= useNavigate()


    let prod=[
        {
            id:1,
            title:"Peri Peri Sauce",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/PA/VR/KU/779497/1650347692818-sku-0046-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price: 235
        },
        {
            id:2,
            title:"0282b Flexible Mobile Stand Multi Angle Adjustment With 360",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/3/EK/DF/OY/97517045/whatsappimage2023-02-01at9-57-06am-500x500.jpg",
            brand:"Deodap International Private Limited",
            price:42
        },
        {
            id:3,
            title:"Sweet Imli Sauce",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/SY/GI/QT/779497/1650347695668-sku-0039-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price:106
        },
        {
            id:4,
            title:"4472a Bullet Train Play Set High Speed Train Play Set For Kids & Children",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/3/ND/AB/YU/97517045/01-32fb843a-1474-4997-bc81-faac23074845-1000x1000.jpg",
            brand:"Deodap International Private Limited",
            price:97
        },
        {
            id:5,
            title:"Thousand Island Dip",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/1/FL/KE/DJ/779497/1650347698709-sku-0104-0-500x500.png",
            brand:"Stm Foods Private Limited",
            price:177
        }
        
    ]


    const HandleClick= (id)=>{
        
        nav(`/fetured/${id}`)
        
    }
    


return <div style={{marginTop:"30px"}}>
<Heading fontSize={"27px"} fontFamily="Red Hat Display, sans-serif" fontWeight="extrabold" color="rgb(17, 17, 17)" position={"relative"} right="520px">Featured Products</Heading>


<Box w="1245px" m="auto" mt="20px" fontFamily="Red Hat Display, sans-serif"  >

<SimpleGrid columns={5} spacing={8}>

{ prod.map((item)=>{
  return <Box key={item.id} w="225px"  h="390px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" 
  textAlign="center"
  cursor={'pointer'}
  onClick={()=>HandleClick(item.id)}
   >
   <Image src={item.img} p="15px" w="100%" h="230px"  />

   <Text textAlign={"start"} fontSize="15px" fontWeight={"700"} color="#111" mt="6px" ml="15px" whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis" >{item.title}</Text>

   <Text textAlign={"start"} mt="10px" fontSize={"13px"}
   fontWeight="400" color={"rgb(69, 70, 71)"} ml="15px"
   whiteSpace={"nowrap"} width="200px" overflow={"hidden"} textOverflow="ellipsis"
   >{item.brand} </Text>

   <Text textAlign={"start"} mt="10px" color={"rgb(46, 49, 146)"} fontSize="20px" fontWeight={"bold"} ml="15px" >₹ {item.price}</Text>
   
   <Button w="90%"  background={"none"} color=" rgb(46, 49, 146)" border={"1px solid  rgb(46, 49, 146)"} fontWeight="700" _hover={{backgroundColor:" rgb(46, 49, 146)", color:"white"}} mt="10px" onClick={()=>console.log("hai")} >Buy Now</Button>
   </Box> 
})



}



</SimpleGrid>







</Box>

</div>

};

export default FeaturedProducts;
