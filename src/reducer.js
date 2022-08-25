let lastId=0;
import * as actions from './actionTypes.js';
export default function reducer(state=[],action){
    switch (action.type) {
        case actions.USER_LOGIN:
            return[
                ...state,
                {
                    userid:++lastId,
                    user_details:action.payload.description,
                    status:true
                }
            ];
        case actions.USER_LOGOUT:
            return state.map(user=>
                user.userid !== action.payload.id ? user :{...user,status:false,user_details:{}}
                );
        default:
            return state; 
    }    
   
}