@echo off
git config user.name "heund"
git config user.email "heund@example.com"
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/heund/web_test1.git
git push -u origin main
