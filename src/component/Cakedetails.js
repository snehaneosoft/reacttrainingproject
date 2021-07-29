import axios from "axios";
import { useEffect, useState } from "react";

export function Cakedetails(props){
  

  var [cakesdetails,setCakesdetails] = useState({});
  useEffect(() =>{
    let apiurl =  process.env.REACT_APP_BASE_API + "/cake/"+ props.match.params.cakeid;
    console.log(apiurl)
    axios({
      method:"get",
      url:apiurl
  
    }).then((response) => {
       console.log('response of cakelist' + response.data);
       setCakesdetails(response.data.data);
      
        
   },(error) =>{

     console.log('responsoe of cakelist' + error)
   })
  },[])


  //add to cart
//  const Addtocartdata = {
//       name:cakesdetails.name,
//       cakeid:cakesdetails.cakeid,
//       price:cakesdetails.price,
//       weight:cakesdetails.weight,
//       image:cakesdetails.image
//   }
  
//   function Adddatacart(e) {
//     e.preventDefault();
   
//     var [addtocartupdate,setcaketocart] = useState({});
//     useEffect(() =>{
//       let apiurl =  process.env.REACT_APP_BASE_API + '/addcaketocart';
//       console.log("addcart",apiurl);
//       axios({
//         method:"post",
//         url:apiurl,
//         data:this.addtocartdata
//       }).then((response) => {
//          console.log('response of cakecartdata' + response.data);
//          setcaketocart(response.data.data);
        
          
//      },(error) =>{
  
//        console.log('responsoe of cakecartdata' + error)
//      })
//     },[])
//   }   

     

console.log("iiiiiiiiiiiii",cakesdetails)
 return (
     <div class='cakedetails-wrapper cake-details-Container'>
         <div><h1>{props.match.params.cakeid}</h1></div>
         <div class='row'>
         <div class='col-sm-6'>
            <div class="cake-img">
                <img src={cakesdetails.image} class="wid100"/>
            </div>
            <div class="ingredient-img">
                 <p class="heading">Ingredients:</p>
                 <ul  class="infredient-list">
                     <li  class="ng-star-inserted">
                         <ul >
                             <li >milk</li>
                             </ul>
                             </li>
                             <li  class="ng-star-inserted">
                                 <ul >
                                     <li >egg</li></ul>
                                     </li>
                                     <li  class="ng-star-inserted">
                                         <ul >
                                             <li >Chocolate</li>
                                        </ul>
                                    </li>
                                    <li  class="ng-star-inserted">
                                        <ul ><li >granulated sugar</li>
                                        </ul></li><li  class="ng-star-inserted">
                                            <ul>
                                                <li >butter</li>
                                            </ul></li>
                                            </ul>
            </div>
         </div>
         <div class='col-sm-6'>
         <div  class="cake-data">
             <div  class="cake-description">
                 <h1  class="screen-hide">Molten chocolate cake</h1>
            <div  class="userReview screen-hide">
                <div  class="rate">
                    <span  class="checked fa fa-star"></span>
                    <span  class="checked fa fa-star"></span>
                    <span  class="checked fa fa-star"></span>
                    <span  class="checked fa fa-star"></span>
                    <span  class="fa fa-star">
                    </span><p >{cakesdetails.ratings}</p>
                </div>
                <div  class="noOfReviews">
                    <p >{cakesdetails.reviews}</p>
                </div>
                </div>
                <div  class="cake-description-text">
                    <p >{cakesdetails.description}</p>
                    <p  class="price highlight">
                    <span  class="heading">Current Price :</span> ₹ 315 </p>
                    <p ></p>
                    <p  class="weight">
                        <span  class="heading">Weight :</span>{cakesdetails.weight}</p>
                    <p  class="flavour highlight"><span  class="heading">Flavour :</span> Chocolate </p>
                    <p  class="type"><span >Occasion :</span> Special</p>
                    </div>
                    </div>
                    <div  class="cake-buttons">
                        <button  class="btn btn-custom btn-primary cart addtocart"> Add To Cart </button>
                        </div>
                        </div>


         </div>

         </div>
     </div>
 )
}

