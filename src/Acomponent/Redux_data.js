import React from 'react'
import { deletebutton } from '../action/Action'
import {useSelector, useDispatch} from 'react-redux'
function Redux_data() {

    const mystate = useSelector((state) => state.max.user)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>View Redux Data</h1>
            
            <div className="container">
              <div className="row">
                <div className="col-3">
                    <h1>Name</h1>
                    {
                        mystate.map((elem, index) => {
                            return(
                                <>
                                  <p>{elem.name}</p>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-2">
                <h1>Age</h1>
                    {
                        mystate.map((elem, index) => {
                            return(
                                <>
                                  <p>{elem.age}</p>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-3">
                <h1>City</h1>
                    {
                        mystate.map((elem, index) => {
                            return(
                                <>
                                  <p>{elem.city}</p>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-4">
                <h1>Phone</h1>
                    {
                        mystate.map((elem, index) => {
                            return(
                                <>
                                  <p>{elem.phone}
                                  <button onClick={() => dispatch(deletebutton(index))}>Del</button>
                                  </p>
                                </>
                            )
                        })
                    }
                </div>
              </div>
            </div>
        
        </div>
    )
}

export default Redux_data
