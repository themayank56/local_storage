import pagereducer from "./Reducer";
import {combineReducers} from 'redux'

const Rootreducer = combineReducers({
    max: pagereducer
})

export default Rootreducer;