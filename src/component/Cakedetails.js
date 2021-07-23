export function Cakedetails(props){
 return (
     <div class='cakedetails-wrapper cake-details-Container'>
         <div><h1>{props.match.params.cakeid}</h1></div>
         <div class='row'>
         <div class='col-sm-6'>
            <div class="cake-img">
                <img src="https://res.cloudinary.com/ashudev/image/upload/v1623224686/ryq09i6xcf8uuv2airbj.jpg" class="wid100"/>
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
                    </span><p >4.5</p>
                </div>
                <div  class="noOfReviews">
                    <p >100 Reviews</p>
                </div>
                </div>
                <div  class="cake-description-text">
                    <p >AMolten chocolate cake for a party of 2 people.</p>
                    <p  class="price highlight">
                    <span  class="heading">Current Price :</span> ₹ 315 </p>
                    <p ></p>
                    <p  class="weight">
                        <span  class="heading">Weight :</span>0.5 Kg </p>
                    <p  class="flavour highlight"><span  class="heading">Flavour :</span> Chocolate </p>
                    <p  class="type"><span >Occasion :</span> Special</p>
                    </div>
                    </div>
                    <div  class="cake-buttons">
                        <button  class="btn btn-custom btn-primary cart"> Add To Cart </button>
                        </div>
                        </div>


         </div>

         </div>
     </div>
 )
}

