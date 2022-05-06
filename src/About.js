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
<div className="instagram_container">
<div className="instagram">
   <p className="greentext">@ElasticThemes</p> 
   <br></br>
   <h2>We're on Instagram!</h2>
   <br></br>
   </div>
   <div className="insta_photo">
      <h2>{id}</h2>
      <img src={image} alt="instagram" width="182px" height="175px"/>
    </div>
    <div className="buttons_slide">
    <button className="btn" onClick={previousPic}>Previous</button>
    <button className="btn" onClick={nextPic}>Next</button>
    </div>
</div>
</div>)
}
export default About;