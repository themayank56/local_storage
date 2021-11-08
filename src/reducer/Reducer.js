const inistate ={
    user:[
        {
            id: 0,
            name:"",
            age: "",
            city: "",
            phone: ""
        }
    ]
}

const pagereducer = (state=inistate,action) =>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                user:[
                    ...state.user,
                    action.data
                ]
    
            }
        case "DELETE":
            const newUser = state.user.filter((elem, index) => {
                return index !==action.id
            })
            return{
                ...state,
                user:newUser
            }
        default: return state

        
    }
}

export default  pagereducer;
