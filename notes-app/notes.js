const chalk = require('chalk')
const fs = require('fs')

const getNotes =  () => {
    return "Your notes..."
}
const addNote =  (title, body)  => {

    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title===title)
    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse('Note title taken! Not added.'))
    }
    
}

/////////////////////////////////
const removeNote =  title => {
    //get the note saved to the data store
    const notes = loadNotes()
    // 1st way
    // const index = notes.findIndex(note => note.title === x )
    // console.log(index)
    // notes.splice(index, 1)
    
    //2nd way
    const updateNotes = notes.filter(note => note.title !== title)

    if (notes.length !== updateNotes.length) {
        console.log(chalk.green.inverse("Note removed!"))
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }

    saveNotes(updateNotes)
   
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright.inverse("Your notes"))
    notes.forEach(note => console.log(note.title))
}

//@@@@@@@@@@@@@@@@@@@@@@@
const readNote = title => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title===title)
    if(duplicateNote) {
        console.log(chalk.yellowBright(duplicateNote.title))
        console.log(chalk.yellowBright.inverse(duplicateNote.body))
    } else {console.log(chalk.red.inverse("Not found"))}
    
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

//
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') //note we will be reading and writing to 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) // returns the parsed json 
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
}