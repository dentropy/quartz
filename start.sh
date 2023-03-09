hugo-obsidian -input=content -output=assets/indices -index -root=.
hugo server --enableGitInfo --minify --bind="0.0.0.0" --baseURL="http://localhost" --port=1313 --appendPort="true" --liveReloadPort=-1
