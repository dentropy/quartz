---
id: P1Ll5w0m5zACVqLDZH34i
title: Bash Script
desc: ''
updated: 1637518109120
created: 1637517478211
---

``` bash
git log \
    --pretty=format:'{%n  "id": "%H", "commit": "%H",%n  "author": "%aN <%aE>",%n  "date": "%ad",%n  "message": "%f"%n},' \
    $@ | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/' > tmp-git-log.json

git log \
    --numstat \
    --format='%H' \
    $@ | \
    perl -lawne '
        if (defined $F[1]) {
            print qq#{"insertions": "$F[0]", "deletions": "$F[1]", "path": "$F[2]"},#
        } elsif (defined $F[0]) {
            print qq#],\n"$F[0]": [#
        };
        END{print qq#],#}' | \
    tail -n +2 | \
    perl -wpe 'BEGIN{print "{"}; END{print "}"}' | \
    tr '\n' ' ' | \
    perl -wpe 's#(]|}),\s*(]|})#$1$2#g' | \
    perl -wpe 's#,\s*?}$#}#' > tmp-git-stat.json

jq --slurp '.[1] as $logstat | .[0] | map(.paths = $logstat[.commit])' tmp-git-log.json tmp-git-stat.json > git-log.json

rm tmp-git-log.json
rm tmp-git-stat.json
```
