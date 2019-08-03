import {Increment} from './increment.js';
export const Async=()=>{
    return(dispatch,getState)=>{
        const {counter}=getState();
        if (counter!=0)
        setTimeout(()=>dispatch(Increment()),2000);
    }
}