@echo off
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Checking for changes...
git status --short
if errorlevel 1 (
    echo Git command failed! Make sure you're in a git repository.
    pause
    exit /b 1
)
echo.

REM Check if there are any changes
git diff-index --quiet HEAD --
if %errorlevel% equ 0 (
    echo No changes to commit.
    pause
    exit /b 0
)

echo Changes detected. Adding files...
git add .
if errorlevel 1 (
    echo Git add failed!
    pause
    exit /b 1
)

echo.
set /p commit_msg=Enter commit message: 
if "%commit_msg%"=="" set commit_msg=Update files

echo Committing changes...
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo Commit failed!
    pause
    exit /b 1
)

echo Pushing to GitHub...
git push origin main
if errorlevel 1 (
    echo Push failed!
    pause
    exit /b 1
)

echo Successfully updated GitHub!
pause
