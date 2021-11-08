import React, {useState} from 'react'
import Redux_data from './Redux_data'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import { addbutton } from '../action/Action'
import { useDispatch} from 'react-redux'
import shortid from 'shortid'
function LocalSto_redux() {

    const [name ,setName] = useState()
    const [age ,setAge] = useState()
    const [city ,setCity] = useState()
    const [phone ,setPhone] = useState()

    
    const dispatch = useDispatch()
    const handelSubmit = () => {
        const dataList = {
            id: shortid.generate(),
            name:name,
            age:age,
            city:city,
            phone:phone
        }
        dispatch(
            addbutton(dataList),
            setName(''),
            setAge(''),
            setCity(''),
            setPhone('')
            )
    }
    
    return (
        <div>
           <h1>Redux localStorage</h1>
           
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /><br /><br />
            <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
            <button onClick={handelSubmit}>Submit</button>
            <hr />
            <Router>
              <div id="max">
                <NavLink className="navv" to="/reduxdata">View Data</NavLink>
              </div><br />
              <Switch>
                <Route exact path ="/reduxdata" exact component={Redux_data} />
              </Switch>
            </Router>
        
        </div>
    )
}

export default LocalSto_redux
