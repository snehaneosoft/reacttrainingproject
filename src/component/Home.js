import React from "react"
import Cakelist from "./Cakelist";
import Carousel from "./Carousel";
export const MyContext = React.createContext({id:10})


function Home(props){
    console.log(">>>>>>>>>>>>>>>>>>>>",props);
    return(
        <div>
        <Carousel />
        <MyContext.Provider>
        <Cakelist history={props.history}/>
        </MyContext.Provider>
       
    </div>
    )
}

export default Home