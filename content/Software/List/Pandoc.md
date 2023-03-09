---
id: SyoqWPR8YaB17S6ksduHA
title: Pandoc
desc: ''
updated: 1642718052693
created: 1628444413857
---

* [Pandoc - Demos](https://pandoc.org/demos.html)
* [makefile - Converting all files in a folder to md using pandoc on Mac - Stack Overflow](https://stackoverflow.com/questions/26126362/converting-all-files-in-a-folder-to-md-using-pandoc-on-mac)

## Rename all filetypes in folder

``` bash
for file in *html
do
  pandoc $file -o $file.md
done
```

``` bash
pandoc --standalone --from markdown -t beamer \
  -o MyProjects.Get\ A\ Fucking\ Job.Resumes.pdf \
  MyProjects.Get\ A\ Fucking\ Job.Resumes.First\ Try.md
```

## Rename all filetypes in folder recursively

## Sources

* [Pandoc - Demos](https://pandoc.org/demos.html)

## [Concepts.list.Demisexual.Resume](Resume) Stuff

* [Markdown Resume - Brave Search](https://search.brave.com/search?q=Markdown+Resume&source=desktop)
* [Editing a CV in markdown with pandoc](https://blog.chmd.fr/editing-a-cv-in-markdown-with-pandoc.html)
* [The Markdown Resume](https://mszep.github.io/pandoc_resume/)
* [resume.md: a Markdown resume](https://mike.place/2020/resume.md/)
* [there4/markdown-resume: Generate a responsive CSS3 and HTML5 resume with Markdown, with optional PDF output.](https://github.com/there4/markdown-resume)