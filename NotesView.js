class NotesView{
    constructor(notes){
        this.notepad = notes
        this.button = document.querySelector('#show-message-button')
        this.button.addEventListener('click', () => {
           this.displayNotes();      
        })
        console.log('Event listener added to button:', this.button)
    }

    displayNotes(){
        let inputValue = document.getElementById("message-input").value

         this.notepad.addNote(inputValue)
         inputValue = ""
         let messageDivs = document.querySelectorAll(".message");
         messageDivs.forEach((messageDiv) => {
             messageDiv.parentNode.removeChild(messageDiv);
         });
        this.notepad.getNotes().forEach(element =>{   
            
            let newDiv = document.createElement('div') 
            newDiv.className = "message"
            newDiv.textContent = element
            document.body.append(newDiv)   
        })     
        document.getElementById("message-input").value = ""
    }

}
module.exports = NotesView;