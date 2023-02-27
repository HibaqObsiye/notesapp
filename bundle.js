(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel = class {
        constructor() {
          this.notes = [];
        }
        addNote(note) {
          this.notes.push(note);
        }
        getNotes() {
          return this.notes;
        }
        resetNotes() {
          return this.notes.length = 0;
        }
      };
      module.exports = NotesModel;
    }
  });

  // NotesView.js
  var require_NotesView = __commonJS({
    "NotesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notes) {
          this.notepad = notes;
          this.button = document.querySelector("#show-message-button");
          this.button.addEventListener("click", () => {
            this.displayNotes();
          });
          console.log("Event listener added to button:", this.button);
        }
        displayNotes() {
          let inputValue = document.getElementById("message-input").value;
          this.notepad.addNote(inputValue);
          inputValue = "";
          let messageDivs = document.querySelectorAll(".message");
          messageDivs.forEach((messageDiv) => {
            messageDiv.parentNode.removeChild(messageDiv);
          });
          this.notepad.getNotes().forEach((element) => {
            let newDiv = document.createElement("div");
            newDiv.className = "message";
            newDiv.textContent = element;
            document.body.append(newDiv);
          });
          document.getElementById("message-input").value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var NotesView = require_NotesView();
  model = new notesModel();
  View = new NotesView(model);
  View.displayNotes();
  console.log(model.getNotes());
  console.log("The note app is running");
})();
