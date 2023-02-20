const NotesModel = require('./notesModel')

it('adds a note', ()=>{
    const model = new NotesModel();
    model.addNote('buy milk')

    expect(model.getNotes()).toBe('buy milk')
})
