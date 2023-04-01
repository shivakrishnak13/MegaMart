import BelowNav from "./BelowNav";
import NavBar from "./NavBar";
import ScrollBar from "./Scrollbar";
import FeaturedProducts from "./FeaturedProducts";
import GridVeiw from "./GridVeiw";
import {Ladies,Mens,shoes,Beauty,Mobile,Home} from "../Data/Ladies";
import NormalGrid from "./NormalGrid";
import Footer from "./Footer";

function HomePage(){

    


    console.log( "home", Mens)
   
    return <div>
        <NavBar/>
        <BelowNav/>
        <ScrollBar/>
        <FeaturedProducts  />
        <GridVeiw data={Ladies}/>
        <NormalGrid data={Mens}/>
        <GridVeiw data={shoes} />
        <NormalGrid data={Beauty}/>
        <GridVeiw data={Mobile} />
        <NormalGrid data={Home} />
        <Footer/>
    </div>
};


export default HomePage;