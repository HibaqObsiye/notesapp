class NotesView{
    constructor(notes){
        this.notepad = notes
        this.button = document.querySelector('#show-message-button')
        this.button.addEventListener('click', () => {
           this.displayNotes();
        })
    }

    displayNotes(){
        let inputValue = document.getElementById("message-input").value
        console.log(inputValue)
        this.notepad.addNote(inputValue)

        this.notepad.getNotes().forEach(element =>{
           let newDiv = document.createElement('div')
           newDiv.textContent = element
           document.body.append(newDiv)
        })
    }

}
module.exports = NotesView;