import { createStore } from "redux";

const redFun = (state = {counter:0},action)=>{


    if(action.type ==='inc'){
        return {counter:state.counter+1}
    }else if(action.type ==='dec'){
        return {counter:state.counter-1}

    }


    return state;
};
const store = createStore(redFun);

export default store;