import axios from 'axios'

const url = 'http://localhost:3001/api/notes'

const getAll = () =>{
    return axios.get(url)
}
const create = (obj) =>{
    return axios.post(url, obj)
}
const update = (id, obj) =>{
    return axios.put(`${url}/${id}`, obj)
}

export default { 
    getAll: getAll, 
    create: create, 
    update: update 
}