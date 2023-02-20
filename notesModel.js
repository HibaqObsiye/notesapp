class NotesModel{
    constructor(){
        this.notes = []
    }

    addNote(note){
        this.notes = note
    }

    getNotes(){
        return this.notes
    }

}
module.exports = NotesModel;