export const addbutton = (data) => {
    return{
        type: "ADD",
        data: data
    }
}

export const deletebutton = (id) => {
    return{
        type: "DELETE",
        id: id
    }
}