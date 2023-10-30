import express from 'express'
import cors from 'cors'
import Note from './mongo.js'


const app = express()
app.use(express.json())
app.use(cors());

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
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
    const note = new Note({
        content: req.body.content,
        important: req.body.important
    })
    note.save().then(savedNote => {
        res.json(savedNote)
    })
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

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)