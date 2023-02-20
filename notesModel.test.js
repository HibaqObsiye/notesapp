const NotesModel = require('./notesModel')

it('adds a note and returns it', ()=>{
    const model = new NotesModel();
    model.addNote('buy milk')

    expect(model.getNotes()).toEqual(['buy milk'])
})

it('returns multiple notes', () =>{
    const model = new NotesModel();
    model.addNote('buy milk')
    model.addNote('buy bread')
    model.addNote('buy tissues')

    expect(model.getNotes()).toEqual(['buy milk', 'buy bread', 'buy tissues'])
})

it('resets Notes', ()=>{
    model = new NotesModel();
    model.addNote('buy milk')
    model.reset()
    expect(model.getNotes).toEqual([])
})
