import store from "./store.js";
import { userloggedin, userloggedout} from "./actions.js"


const unsubscribe=store.subscribe(()=>{
    console.log("Store changed!",store.getState());
});

store.dispatch(userloggedin({
    username:'Harsha',
    profilePic:'sample.jpg'
}));

store.dispatch(userloggedout(1))

// store.dispatch(bugAdded('Bug 2'));
// store.dispatch(bugResolved(2))
// store.dispatch(bugRemoved(2))

unsubscribe();



// console.log(store.getState());