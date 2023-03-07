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
        constructor(notes, client2) {
          this.notepad = notes;
          this.noteclient = client2;
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
        displayNotesFromApi() {
          this.noteclient.loadNotes((notes) => {
            this.notepad.resetNotes();
            notes.forEach((note) => {
              this.notepad.addNote(note);
            });
            this.displayNotes();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // NotesClient.js
  var require_NotesClient = __commonJS({
    "NotesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesClient2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var NotesView = require_NotesView();
  var NotesClient = require_NotesClient();
  model = new notesModel();
  client = new NotesClient();
  view = new NotesView(model, client);
  console.log(view.displayNotesFromApi());
})();
