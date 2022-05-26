import { useState } from "react";
import { dataInst } from "./dataInst";
function About (){
   const[instagram, setInstagram] = useState(0);
   const {id, image} = dataInst[instagram]
   const previousPic =()=>{
setInstagram((instagram =>{
   instagram --;
   if (instagram< 0){
      return dataInst.length -1;
   }
   return instagram
}))
   }
   const nextPic =()=>{
setInstagram((instagram=>{
   instagram ++;
   if (instagram >dataInst.length -1){
instagram =0;
   }
   return instagram
}))
   }
   return(
      <div>
<div className="instagram">
   <h2 className="current">Current information</h2>
<h3 className="abouttext">Dear customers,
On this page you will find an overview of our stores with information on the current opening hours.
Note: Please follow the general rules of hygiene and distance in stores, as well as the legal rules on coronavirus in the appropriate place.
We look forward to your visit.
Your ToyStore team</h3>
<br></br>
<div className="shop_container">
<div className="shop_container_block">
<h2>ToyStore Berlin</h2>
<h3>Kurfürstendamm 41/40 10719 Berlin</h3>
<h3>Tel.030-98625007</h3>
<h3>Mon-Fri 10:00 - 19:00</h3>
<h3>Sat 10:00 - 18:00</h3>
</div>
<div className="shop_container_block">
<h2>ToyStore Düsseldorf</h2>
<h3>Königsallee 65d
40212 Düsseldorf</h3>
<h3>Tel. 0212-8681768</h3>
<h3>Mon-Fri 10:00 - 19:00 Uhr</h3>
<h3>Sat 10:00 - 18:00</h3>
</div>
</div>
   <br></br>
   <h2>We're on Instagram!</h2>
   <br></br>
   <p className="greentext"><a href="https://www.instagram.com/">@ElasticThemes</a></p> 
   <br></br>
   </div>
   <div className="insta_photo">
      <img src={image} alt="instagram" width="300px" height="250px"/>
    </div>
    <div className="buttons_slide">
    <button className="btn" onClick={previousPic}>Previous</button>
    <button className="btn" onClick={nextPic}>Next</button>
    </div>
    <br></br>
</div>
)
}
export default About;