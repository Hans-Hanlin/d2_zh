@echo off
cd /d "%~dp0"
start wt -d "%cd%" --title "D2-zh - Claude Code" cmd /k claude --dangerously-skip-permissions
