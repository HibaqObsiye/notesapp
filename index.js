const notesModel = require('./notesModel')
const NotesView = require('./NotesView.js')

model = new notesModel()

View = new NotesView(model)
View.displayNotes()
console.log(model.getNotes())
console.log("The note app is running")