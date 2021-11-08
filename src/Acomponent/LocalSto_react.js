import React,{useState, useEffect} from "react";

function LocalSto_react() {

  const [name, setName]  = useState()
  const [age, setAge]  = useState()

  const [nameVal, setNameVal]  = useState([])
  const [ageVal, setAgeVal]  = useState([])

  const handelSubmit = () => {
    setNameVal((state) => {
      return [...state, name]
    })
    setAgeVal((state) => {
      return [...state, age]
    })

    setName('')
    setAge('')
  }
  const handelDelete = (id) => {
    setNameVal((state) => {
      return state.filter((elem, index) => {
        return index !== id
      })
    })
    setAgeVal((state) => {
      return state.filter((elem, index) => {
        return index !== id
      })
    })
  }


  useEffect(() => {
    const get_name = localStorage.getItem("Name_List")
    const get_age = localStorage.getItem("Age_List")
    if(get_name, get_age){
      setNameVal(JSON.parse(get_name))
      setAgeVal(JSON.parse(get_age))
    }
  },[],[])
  useEffect(() => {
    localStorage.setItem("Name_List", JSON.stringify(nameVal))
    localStorage.setItem("Age_List", JSON.stringify(ageVal))
  },[nameVal],[ageVal])
  return (
    <>
      <h1>Home</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
      <button onClick={handelSubmit}>Submit</button>
      <hr />

      <div className =" container">
        <div className="row">
          <div className="col-4">
            <h1>Name</h1>
            {
              nameVal.map((elem, id) => {
                return(
                  <>
                    <p>{elem}</p>
                  </>
                )
              })
            }
          </div>
          <div className="col-6">
          <h1>Age</h1>
            {
              ageVal.map((elem, id) => {
                return(
                  <>
                    <p>{elem}
                    <button onClick={() => handelDelete(id)}>Delete</button>
                    </p>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default LocalSto_react;
