export var AuthReducer = function(state={
    isuserloggedin : localStorage.token?true:false
},action){
    switch(action.type){
        case "LOGIN":{
                state = {...state}
                state["isuserloggedin"] = true 
                state["user"] = action.payload
                console.log(">>>>>>>>>>>>>" ,state)
                return state
            }
      
        default: return state
    }
}

// export var AuthReducer2 = function(state={},action){
//     switch(action.type){
//         case "CAKELIST":{
//                 state = {...state}
//                 state["isuserloggedin"] = true 
//                 state = action.listload
//                 console.log(">>>>>>>>>>>>>cakelist" ,state)
//                 return state
//             }
      
//         default: return state
//     }
// }



export var reducer1 = function(state={dell:10},action){
        switch(action.type){
            case "something":
                {
                    state = {...state}
                    return state
                }
            case "Dell_desktop":{
                state = {...state}
                state["dell"]-=1
                return state
            }
            default: return state
        }
}

export var reducer2 = function(state={registration:10},action){
    switch(action.type){
        case "register":{
            state={...state}
            return state
        }
        case "deregister":{
            state={...state}
            state["registration"]+=1
            return state
        }
        default: return state
    }
}



