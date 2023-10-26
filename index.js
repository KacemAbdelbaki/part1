import express from 'express'
const app = express()
app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
]

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/read/:id', (req,res)=>{
    const note = notes.find(n => n.id == req.params.id)
    if(note)
        res.json(note)
    else
        res.status(404).end()
})

app.get('/api/notes/delete/:id', (req,res)=>{
        notes = notes.filter(n => n.id != req.params.id) 
        res.json(notes)
})

app.post('/api/notes/create', (req,res)=>{
    notes = notes.concat(req.body)
    res.json(notes)
})

app.post('/api/notes/update/:id', (req,res)=>{
    const note = notes.find(n => n.id == req.params.id)
    if(note){
        note.content = req.body.content
        note.important = req.body.important
        res.json(notes)
    } 
    else
        res.status(404).end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)