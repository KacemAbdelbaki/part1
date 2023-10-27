import { useState,useEffect } from "react"
import noteService from '../services/notes'

const AppV2 = () =>{

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    
    const hook=() => {
        console.log('effect')
        noteService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
            
    } 
    useEffect(hook,[])

    const addNote = (event) =>{
        event.preventDefault() 
        const noteObj = {
            id: notes.length+1,
            content: newNote,
            important: Math.random() > 0.5,
        }
        noteService
            .create(noteObj)
            .then(response => {
                setNotes(response.data)
                setNewNote("")
            })
    }

    const handleNewNote = (event) =>{
        setNewNote(event.target.value)
        // console.log(event.target.value)
    }

    const label = (note) => {
        return note.important ? "make not important" : "make important" 
    }

    const toggleImportance = (note) => {
        const changedNote = { ...note, important: !note.important }
        const url = `http://localhost:3001/notes/${note.id}`
        noteService
            .update(note.id, changedNote)
            .then(response => {
                setNotes(notes.map(n => n.id != note.id? n : response.data))
            })
    }

    const delete_note = (id) => {
        noteService
            .delete_note(id)
            .then(response => {
                setNotes(response.data)
            })
    }

    return(
        <center>
            <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <li key={note.id}>
                        {note.content} <br/>
                        <button onClick={() => toggleImportance(note)}>{label(note)}</button> <button onClick={() => delete_note(note.id)}>Delete</button>
                    </li>
                )}
            </ul>
            
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNewNote} />
                <button type="Submit">Add</button>
            </form>
            <div>
                
            </div>
        </div>
        </center>
    )
}   

export default AppV2