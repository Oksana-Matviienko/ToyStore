import woodenmain from "./woodentoys.png";
import teddy from "./teddy.png";
function Buttons({toysSelect}){
return(
   <div>
      <div className="product_type_container">

   <div className="product_type_stuffed">
           <img className="teddy" src={teddy} alt="stuffed toys" width="220px" height="220px"/>
           <div className="stuffed">
           <h2>Stuffed Animals</h2>
           <button className="btnShop" onClick={()=> toysSelect("stuffed")}>Shop Now</button>
           </div>
           </div>

           <div className="product_type_wooden">
           <div className="wooden">
           <h2>Wooden Toys</h2>
           <button className="btnShop" onClick={()=> toysSelect("wooden")}>Shop Now</button>
           </div>
           <img className="flower" src={woodenmain} alt="wooden toys" width="220px" height="220px"/>
           </div>
           </div>

   </div>
)
}
export default Buttons;