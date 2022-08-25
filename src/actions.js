import * as  actions from "./actionTypes.js";


export const userloggedin=description =>({
    type:actions.USER_LOGIN,
        payload:{
            description
        }
})

export const userloggedout=id=>({
    type:actions.USER_LOGOUT,
    payload:{
        id
    }
})
