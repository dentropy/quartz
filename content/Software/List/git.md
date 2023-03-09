## #TODO

* [set time for git commit - Brave Search](https://search.brave.com/search?q=set+time+for+git+commit&source=desktop)
``` bash
git commit --date="1 hours ago" -m "message"
```
* [How can one change the timestamp of an old commit in Git? - Stack Overflow](https://stackoverflow.com/questions/454734/how-can-one-change-the-timestamp-of-an-old-commit-in-git)
* [Pull latest changes for all git submodules - Stack Overflow](https://stackoverflow.com/questions/1030169/pull-latest-changes-for-all-git-submodules)
* [How can one change the timestamp of an old commit in Git? - Stack Overflow](https://stackoverflow.com/questions/454734/how-can-one-change-the-timestamp-of-an-old-commit-in-git)
* [github - Use future date while making git commits - Stack Overflow](https://stackoverflow.com/questions/29927453/use-future-date-while-making-git-commits)

```bash
git commit --amend --date="Jan 24 22:02 2023 +0500" --no-edit
```

* [Git: Easiest way to reset git config file - Stack Overflow](https://stackoverflow.com/questions/35853986/git-easiest-way-to-reset-git-config-file)
* git config --global url."https://github.com/".insteadOf
* [github - Git merge with force overwrite - Stack Overflow](https://stackoverflow.com/questions/40517129/git-merge-with-force-overwrite)
* [git - How do I view all commits for a specific day? - Stack Overflow](https://stackoverflow.com/questions/19987099/how-do-i-view-all-commits-for-a-specific-day)
* [version control - How can I get a list of Git branches, ordered by most recent commit? - Stack Overflow](https://stackoverflow.com/questions/5188320/how-can-i-get-a-list-of-git-branches-ordered-by-most-recent-commit)
* [How to merge two or multiple git repositories into one | by Vaibhav Mule | AltCampus | Medium](https://medium.com/altcampus/how-to-merge-two-or-multiple-git-repositories-into-one-9f8a5209913f)
* [How to Merge Two Git Repositories](https://www.w3docs.com/snippets/git/how-to-merge-two-git-repositories.html)
* get number of git commits
* [version control - How do I undo the most recent local commits in Git? - Stack Overflow](https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git)
* [version control - Git: How do I force "git pull" to overwrite local files? - Stack Overflow](https://stackoverflow.com/questions/1125968/git-how-do-i-force-git-pull-to-overwrite-local-files)
* [How can I make Git "forget" about a file that was tracked, but is now in .gitignore? - Stack Overflow](https://stackoverflow.com/questions/1274057/how-can-i-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitign)
* Cheatsheet
  * [13 Advanced (but useful) Git Techniques and Shortcuts - YouTube](https://www.youtube.com/watch?v=ecK3EnyGD8o)
  * [git - How to revert pushed commits? - Stack Overflow](https://stackoverflow.com/questions/46897033/how-to-revert-pushed-commits)
* Read through all the example below and better organize them
* Put this in the skill tree
* [OpenSSH update causes problems : archlinux](https://old.reddit.com/r/archlinux/comments/lyazre/openssh_update_causes_problems/)
* [How To Clear Git Cache – devconnected](https://devconnected.com/how-to-clear-git-cache/)
* [What is git stash?](https://www.theserverside.com/definition/git-stash)
* [Pulling from Git fails and gives me following error: client_global_hostkeys_private_confirm: server gave bad signature for RSA key 0 - Stack Overflow](https://stackoverflow.com/questions/67401049/pulling-from-git-fails-and-gives-me-following-error-client-global-hostkeys-priv)
* [List all developers on a project in Git - Stack Overflow](https://stackoverflow.com/questions/9597410/list-all-developers-on-a-project-in-git)

## [wiki.software.List.ssh](Create%20and%20add%20new%20SSH%20Key)

## Remote Branches

``` bash
# list all remote branches
git fetch
git branch -a
```

[https://tecadmin.net/list-all-remote-branches-in-git/](https://tecadmin.net/list-all-remote-branches-in-git/)

### Rename local and remote

[https://multiplestates.wordpress.com/2015/02/05/rename-a-local-and-remote-branch-in-git/](https://multiplestates.wordpress.com/2015/02/05/rename-a-local-and-remote-branch-in-git/)

### Delete local and remote branch separately

``` bash
# local
git branch -d feature/login
# remote
git push origin --delete feature/login
```

* References:
  * [How can I delete a remote branch in Git? | Learn Version Control with Git](https://www.git-tower.com/learn/git/faq/delete-remote-branch/)

## Pull all branches

``` bash
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

* References:
  * [branch - How to fetch all Git branches - Stack Overflow](https://stackoverflow.com/questions/10312521/how-to-fetch-all-git-branches)

### Delete a local and a remote GIT branch

* References:
  * [Delete a local and a remote GIT branch | by Aram Koukia | Koukia](https://koukia.ca/delete-a-local-and-a-remote-git-branch-61df0b10d323?gi=5b67a6c668b1)

## git submodules

``` bash
# Add
git submodule add {ssh or https path to git repo}}
# pull / Update
git submodule update --recursive --remote
```

* References:
  * [Add a submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
  * [pull submodule](https://stackoverflow.com/questions/1030169/easy-way-to-pull-latest-of-all-git-submodules#1032653)

## Restore a delete file

* References:
  * [How to find and restore a deleted file in a Git repository - Stack Overflow](https://stackoverflow.com/questions/953481/how-to-find-and-restore-a-deleted-file-in-a-git-repository)

## Delete file form hit history

* [github - How to remove file from Git history? - Stack Overflow](https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history)

``` bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD
```
* [git commit - Purging file from Git repo failed, unable to create new backup -...](https://stackoverflow.com/questions/6403601/purging-file-from-git-repo-failed-unable-to-create-new-backup)

* References
  * [github - How to remove file from Git history? - Stack Overflow](https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history)
  * [git commit - Purging file from Git repo failed, unable to create new backup - Stack Overflow](https://stackoverflow.com/questions/6403601/purging-file-from-git-repo-failed-unable-to-create-new-backup)

## Reset branch to head

``` bash
git reset --hard HEAD
# Delete all unused files
git clean
git clean -f
```
    
* References:
  * [How To Git Reset to HEAD – devconnected](https://devconnected.com/how-to-git-reset-to-head/)

## Delete untracked files

``` bash
git clean -n
git clean -f
```

* References:
  * [How to remove local untracked files from the current Git branch | by Aram Koukia | Koukia](https://koukia.ca/how-to-remove-local-untracked-files-from-the-current-git-branch-571c6ce9b6b1)

## git pull fails "unable to resolve reference" "unable to update local


[https://stackoverflow.com/questions/2998832/git-pull-fails-unable-to-resolve-reference-unable-to-update-local-ref/30939030](https://stackoverflow.com/questions/2998832/git-pull-fails-unable-to-resolve-reference-unable-to-update-local-ref/30939030)

## Revert to previous commit

``` bash
git reset --hard COMMIT HASH
git push https://git.... --force
```

* References:
  * [git pull fails "unable to resolve reference" "unable to update local ref" - Stack Overflow](https://stackoverflow.com/questions/2998832/git-pull-fails-unable-to-resolve-reference-unable-to-update-local-ref/30939030)

## For push

``` bash
git push origin <your_branch_name> --force
```  

* References:
  * [How do I properly force a Git push? - Stack Overflow](https://stackoverflow.com/questions/5509543/how-do-i-properly-force-a-git-push)

## Amend

* References:
  * [How to ammend last commit](https://medium.com/@igor_marques/git-basics-adding-more-changes-to-your-last-commit-1629344cb9a8)



``` bash
npm install -g ts-node typescript '@types/node'

npx ts-node typescript-file.ts
```