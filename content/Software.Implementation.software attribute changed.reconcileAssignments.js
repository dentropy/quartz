module.exports = function (note, categoryRootNote, assignedCategories, labelName) {
    const found = {};
    
    for (const categoryNote of categoryRootNote.getChildNotes()) {
        const label = categoryNote.getLabel(labelName);
        
        if (label) {
            found[label.value] = assignedCategories.includes(label.value);

            api.toggleNoteInParent(found[label.value], note.noteId, categoryNote.noteId);
        }
    }
    
    for (const assignedCategory of assignedCategories) {
        if (!found[assignedCategory]) {
            const categoryNote = api.createTextNote(categoryRootNote.noteId, assignedCategory, "").note;

            categoryNote.addLabel(labelName, assignedCategory);

            api.ensureNoteIsPresentInParent(note.noteId, categoryNote.noteId);
        }
    }
}