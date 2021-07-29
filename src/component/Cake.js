import {useContext} from "react"
import {MyContext} from "./Home"
import axios from "axios"
import {withRouter} from "react-router-dom";




function Cake(props){
    const context1 = useContext(MyContext)
    function showDetails(event){
       props.history.push('/cake'+'/'+props.data.cakeid)
    }

   // console.log("..............." , props)
    return (
        <div onClick={showDetails} class="card col-4 " style={{width: "14rem"}}>
            <div class="cakecard">
            <img style={{height:"18rem"}} src={props.data.image} class="card-img-top" alt="..." />
             <div class="card-body">
                <h5 class="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.price}</p>
            </div>
            </div>
        </div>
    )
}

export default withRouter(Cake)