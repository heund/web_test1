@echo off
git rm --cached "folders/experiments/*.mp4"
git add .gitignore
git commit -m "Remove large experiment videos"
git push -u origin main
