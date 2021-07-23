import {useContext} from "react"
import {MyContext} from "./Home"





function Cake(props){
    const context1 = useContext(MyContext)
    function showDetails(){
        props.history.push('/cake/'+props.cakedata.id)
    }
    console.log("..............." , props)
    return (
        <div onClick={showDetails} class="card col-4 " style={{width: "14rem"}}>
            <div class="cakecard">
            <img style={{height:"18rem"}} src={props.cakedata.image} class="card-img-top" alt="..." />
             <div class="card-body">
                <h5 class="card-title">{props.cakedata.name}</h5>
                <p className="card-text">{props.cakedata.price}</p>
            </div>
            </div>
        </div>
    )
}

export default Cake