let lastId=0;
import * as actions from './actionTypes.js';
export default function reducer(state=[],action){
    switch (action.type) {
        case actions.BUG_ADDED:
            return[
                ...state,
                {
                    id:++lastId,
                    description:action.payload.description,
                    resolved:false
                }
            ];
        case actions.BUG_REMOVE:
            return state.filter(bug=>bug.id!=action.payload.id) 
        case actions.BUG_RESOLVED:
            return state.map(bug=>
                bug.id !== action.payload.id ? bug :{...bug,resolved:true}
                );
        default:
            return state; 
    }    
   
}