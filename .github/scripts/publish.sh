#!/usr/bin/env bash
# Publish a folder as the whole data branch: one commit, no history, so the branch stays small.
# Usage: publish.sh DIR "message"   (TOKEN and GITHUB_REPOSITORY from the job; DATA_BRANCH is "data" unless set)
set -euo pipefail
dir="$1"; msg="$2"; branch="${DATA_BRANCH:-data}"
cd "$dir"
rm -rf .git
git init -q -b "$branch"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git add -A
git commit -q -m "$msg $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "https://x-access-token:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git" "$branch"
rm -rf .git
