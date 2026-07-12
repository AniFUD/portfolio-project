#!/bin/bash

# Watch and push script for Odunayo Falade's Portfolio Project
INTERVAL=10
BRANCH="main"

echo "=============================================="
echo " Starting Git Auto-Watcher & Auto-Push Agent"
echo " Monitoring interval: ${INTERVAL}s"
echo " Tracking branch: ${BRANCH}"
echo "=============================================="

while true; do
  # Check if there are changes in tracked paths (excluding untracked files)
  CHANGES=$(git status --porcelain | grep -E '^(M | M|D | D|R | R|A | A)')
  
  if [ ! -z "$CHANGES" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Changes detected:"
    echo "$CHANGES"
    
    # Stage modifications
    git add -u
    
    # Commit changes
    COMMIT_MSG="auto-sync: modifications on $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    
    # Check if a remote "origin" is configured
    git remote | grep origin > /dev/null
    if [ $? -eq 0 ]; then
      echo "Pushing changes to GitHub remote..."
      git push origin "$BRANCH"
    else
      echo "No remote 'origin' configured yet. Changes committed locally."
      echo "To link GitHub, run: git remote add origin <your-github-url> && git push -u origin main"
    fi
  fi
  
  sleep $INTERVAL
done
