import { useState } from "react";
import About from "./About";
import { data } from "./data";
import { dataTwo } from "./dataTwo";
import spiderman from "./spiderman.png";
import teddy from "./teddy.png";
import woodenmain from "./woodentoys.png";
import Catalog from "./Catalog"


function ToyStore(){
   const [stuffedToys, setStuffedToys] = useState(data);
   const [woodenToys, setWoodenToys] = useState(dataTwo);
   let textS = "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.  "
   const [showMore, setShowMore] = useState(false);

   return(
      <div>
      <div className="main_container">
         <div className="main_text">
         <p className="greentext">Say Hello to ToyStore!</p>
         <br></br>
         <h1> Free Ecommerce <br></br> Template for Webflow </h1>
         </div>
      </div>
      <br></br>
      {/* Stuffed/Wooden Toys */}
      <div className="product_type_container">
<div className="product_type_stuffed">
        <img className="teddy" src={teddy} alt="stuffed toys" width="220px" height="220px"/>
        <div className="stuffed">
        <h2>Stuffed Animals</h2>
        </div>
        </div>

        <div className="product_type_wooden">
        <div className="wooden">
        <h2>Wooden Toys</h2>
        </div>
        <img className="flower" src={woodenmain} alt="wooden toys" width="220px" height="220px"/>
        </div>
        </div>
<br></br>
           <div className="range">
           <h2 className="indent">Stuffed Animals</h2>
           <div  className="toys_container">
   {stuffedToys.map((element=>{
      const {id, image, title, price} = element;
      return(
         <div key={id}>
         <div className="stuffed_animals_block">
        <p className="toySize">{image}</p> 
         <p className="title_size">{title}</p>
         <p className="prise_size">{price}</p>
            </div>
            </div>
        
      )
   }))}
    </div>
   </div>

   <div className="range">
           <h2 className="indent">Wooden Toys</h2>
           <div  className="toys_container">
   {woodenToys.map((element=>{
      const {id, image, title, price} = element;
      return(
         <div key={id}>
         <div className="stuffed_animals_block">
        <p className="toySize">{image}</p> 
         <p className="title_size">{title}</p>
         <p className="prise_size">{price}</p>
            </div>
            </div>
        
      )
   }))}
    </div>
   </div>

<div className="delivery_container">
   <div className="delivery">
      <br></br>
<h2 className="heading_text">Delivering Happiness</h2>
<br></br>
<p className="text">We work so that you can receive your orders every day and delight your kids. Give moments of happiness to the most precious person in the world.</p>
   </div>
</div>

<div className="information_container">
<div className="information">
   <div className="header_infornation">
   <p className="greentext">Made for Webflow</p> 
   <br></br>
   <h2>Simple & Colorful Ecommerce</h2>
   <h2>Template for Your Business</h2>
   <br></br>
   </div>
<div className="information_block">
<div className="information_text_block">
<h2>Available for FREE!</h2>
<p className="green">___________________</p>
<p>{showMore ? textS : textS.substring(0,148)+"..."}
<button className="show" onClick={()=>{setShowMore(!showMore)}}>{showMore? "Show Less" : "Show More"}</button></p>
<br></br>
<button className="btn">Don't miss!</button>
</div>
<img className="spider" src ={spiderman} alt="spiderman"width="567px" height="422px"/>
</div>
</div>
</div>
<About/>
<footer>
   <p>Design by Elastic Themes</p>
   <p>Web-site was made by Oksana Matviienko</p>
</footer>
   </div>
   )
};

export default ToyStore;