import { useState } from "react"
import { dataMixed } from "./dataMixed"
import Buttons from "./Buttons";

function Catalog(){
   const [toys, setToys] = useState (dataMixed);
   const toysSelect = (searchTerm) => {
      const choise = dataMixed.filter(element => element.searchTerm === searchTerm);
      setToys(choise);
      
   }
   return(
      <div>
         <br></br>
         <h1>Choose the option</h1>
         <Buttons toysSelect={toysSelect}/>
         <div className="toys_container">
         {toys.map((item=>{
            const {id, image, title, price, searchTerm} = item;
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
   )
}
export default Catalog;