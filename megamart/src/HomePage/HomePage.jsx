import BelowNav from "./BelowNav";
import NavBar from "./NavBar";
import ScrollBar from "./Scrollbar";
import FeaturedProducts from "./FeaturedProducts";
import GridVeiw from "./GridVeiw";
import {Ladies,mens} from "../Data/Ladies";
import { Button } from "@chakra-ui/react";
import NormalGrid from "./NormalGrid";


function HomePage(){
    console.log( "home", mens)
   
    return <div>
        <NavBar/>
        <BelowNav/>
        <ScrollBar/>
        <FeaturedProducts/>
        <GridVeiw data={Ladies}/>
        <NormalGrid data={mens}/>
        
    </div>
};


export default HomePage;