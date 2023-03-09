2023-02-08T16:14:01-05:00

FYI Dendron has been disconsintoued
# dendron vs trilium vs org-mode



[Paul mullins on Twitter: "@kevins8 @RobertHaisfield @tallguyjenks @dendronhq I recently switched to using trilium notes from dendron for a variety of reasons one of them being note higharchy features. Trilium notes using a sqlite database allows cloning entire folders of notes into other parts of the hierarchy." / Twitter](https://twitter.com/PaulWMullins/status/1359946401938108417)

*   WYSIWYG editor that operations as markdown
    *   Tables in markdown are a pain the ass
    *   Using embedded images in markdown requires rendering the markdown in a separate window  
*   Books of notes
*   Tag inheritance 
*   Version Control on a per note basis works better than git
*   API
    *   Code is supported as a first class citizen
    *   The code written in tilium is part of trilium 
    *   Adding Buttons to the UI
    *   Custom javascript such as a graph of weight over time
    *   SQL queries on your notes
*   Hierarchy stuff
    *   Files vs Folders
*   The database stores everything as basic HTML and everything can be imported or exported as markdown
*   Comparison to Orgmode
    *   Orgmode is a religion I wish I could join
        *   It is not user friendly, I had spellcheck break and went down a rabbit hole of linux tools that support spell check
        *   You add a new package and then you need to explicitly add it to your workflow, I forget the next day I added the package and never use it
    *   Org-mode supports the date time object
    *   Org-Agenda, TODO seems like a pretty dam ideal workflow
        *   Web Dav Calendar Plugins
    *   Org mode links are rendered as the text without the link but one can easily see where the link goes and edit it
    *   Pasting links can get the URL title
    *   Org-Roam is a true competitor to roam in and of itself and its note map gui is the best one I have ever seen
        *   Org-roam dumps all notes to a sqlite database anyways
