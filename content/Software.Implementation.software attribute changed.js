if (!["software", "softwareType", "softwareProgrammingLanguage"].includes(api.originEntity.name)) {
    return;
}

const tagRootNote = api.getNoteWithLabel('softwareTagRoot');
const typeRootNote = api.getNoteWithLabel('softwareType');
const programmingLangageRootNote = api.getNoteWithLabel('softwareProgrammingLanguage');

if (!tagRootNote || !typeRootNote || !programmingLangageRootNote) {
    console.log("One of the tagRootNote, typeRootNote or programmingLangageRootNote does not exist");
    return;
}

const note = api.originEntity.getNote();
    
const attributes = note.getAttributes();

const softwareTypeTags = attributes.filter(attr => attr.type === 'label' && attr.name === 'softwareType').map(attr => attr.value);

reconcileAssignments(note, api.getNoteWithLabel('softwareTypeNote'), softwareTypeTags, 'softwareTypeNote');

const softwareProgrammingLanguageTags = attributes.filter(attr => attr.type === 'label' && attr.name === 'softwareProgrammingLanguage').map(attr => attr.value);

reconcileAssignments(note, 
                     api.getNoteWithLabel('softwareProgrammingLanguageNote'), 
                     softwareProgrammingLanguageTags, 
                     'softwareTypeNote');