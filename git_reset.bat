@echo off
rm -rf .git
git init
echo folders/experiments/*.mp4 > .gitignore
git add .
git commit -m "Initial commit without large files"
git branch -M main
git remote add origin https://github.com/heund/web_test1.git
git push -f -u origin main
