@echo off
del /Q "folders\experiments\*.mp4"
git add -A
git commit -m "Remove large video files"
git push -f -u origin main
