class NotesModel{
    constructor(){
        this.notes = []
    }

    addNote(note){
        this.notes.push(note)
    }

    getNotes(){
        return this.notes
    }

    resetNotes(){
        return this.notes.length = 0
    }

}
module.exports = NotesModel;