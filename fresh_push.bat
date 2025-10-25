@echo off
rmdir /S /Q .git
del /Q "folders\experiments\*.mp4"
git init
git config user.name "heund"
git config user.email "heund@example.com"
echo folders/experiments/*.mp4 > .gitignore
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/heund/web_test1.git
git push -f -u origin main
