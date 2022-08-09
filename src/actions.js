import * as  actions from "./actionTypes.js";

// export function bugAdded(description){
//    return{
//     type:actions.BUG_ADDED,
//     payload:{
//         description:"Bug1"
//     }
// }
// }

export const bugAdded=description =>({
    type:actions.BUG_ADDED,
        payload:{
            description
        }
})

export const bugResolved=id=>({
    type:actions.BUG_RESOLVED,
    payload:{
        id
    }
})

export const bugRemoved=id=>({
    type:actions.BUG_REMOVE,
    payload:{
        id
    }
})