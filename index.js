const notesModel = require('./notesModel')

model = new notesModel()
model.addNote('buy milk')
model.addNote('buy food')
console.log(model.getNotes())
console.log("The note app is running")