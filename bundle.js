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
        }
        displayNotes() {
          this.notepad.getNotes().forEach((element) => {
            let newDiv = document.createElement("div");
            newDiv.textContent = element;
            document.body.append(newDiv);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var NotesView = require_NotesView();
  model = new notesModel();
  model.addNote("buy milk");
  model.addNote("buy food");
  View = new NotesView(model);
  View.displayNotes();
  console.log(model.getNotes());
  console.log("The note app is running");
})();
