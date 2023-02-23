class NotesView{
    constructor(notes){
        this.notepad = notes
    }

    displayNotes(){
        this.notepad.getNotes().forEach(element =>{
           let newDiv = document.createElement('div')
           newDiv.textContent = element
           document.body.append(newDiv)
        })
    }

}
module.exports = NotesView;