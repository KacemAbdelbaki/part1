import mongoose from "mongoose";
  
  const url =
    `mongodb+srv://fullstack:fullstack@database0.oxakk9z.mongodb.net/noteApp`
  
  mongoose.set('strictQuery',false)
  mongoose.connect(url)

  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
  })
  const Note = mongoose.model('Note', noteSchema)

export default Note