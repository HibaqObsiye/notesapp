/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./NotesView')
const NotesModel = require('./notesModel')
describe('displayNotes', ()=>{
    model = new NotesModel()
    model.addNote('buy milk')
    model.addNote('buy phone')

    view = new NotesView()
    view.displayNotes()

    expect(document.querySelectorAll('div').length).toBe(2)
})