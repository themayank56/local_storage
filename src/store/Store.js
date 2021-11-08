import Rootreducer from "../reducer/Rootreducer";
import { createStore } from "redux";

function setLocalStorage (state) {
    localStorage.setItem("Data_List", JSON.stringify(state))
}
function getLocalStorage (){
    const get_data = localStorage.getItem("Data_List")
    if(get_data){
        return JSON.parse(get_data)
    }else{
        return []
    }
}

const store = createStore(
    Rootreducer,
    getLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => setLocalStorage(store.getState()))
export default store;