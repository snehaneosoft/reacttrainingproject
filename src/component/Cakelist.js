import axios from "axios"
import { useEffect, useState } from "react"
import Cake from "./Cake"






function Cakelist(props){
  
 
  var [cakes,setCakeslist] = useState([]);
  useEffect(() =>{
    let apiurl = process.env.REACT_APP_BASE_API + "/allcakes";
    axios({
      method:"get",
      url:apiurl
  
    }).then((response) => {
      // console.log('response of cakelist' + response.data);
       setCakeslist(response.data.data);
    
   },(error) =>{

     // console.log('responsoe of cakelist' + error)
   })
  },[])


    return (
        <div class="container cakecontainer">
            <div className="row">
            {cakes.map((each,index)=>{
           //   console.log("picking cakes one by one" , index , each)
              return <Cake key={index} data={each} />
            })}
            </div>
        </div>
    )
}

export default Cakelist