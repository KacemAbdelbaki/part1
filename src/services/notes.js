import axios from 'axios'

const url = 'http://localhost:3001/api/notes'

const getAll = () =>{
    return axios.get(url)
}
const create = (obj) =>{
    return axios.post(`${url}/create`, obj)
}
const update = (id, obj) =>{
    return axios.put(`${url}/update/${id}`, obj)
}
const delete_note = (id) =>{
    return axios.get(`${url}/delete/${id}`)
}

export default { 
    getAll, 
    create, 
    update,
    delete_note
}