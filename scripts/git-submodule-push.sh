#!/bin/bash

# Git Submodule Push Automation
# Pushes changes in all submodules and updates main repository

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}🚀 Ki Submodule Push Automation${NC}"
echo -e "${BLUE}=================================${NC}"

# Function to check if directory is a git repository
is_git_repo() {
    [ -d "$1/.git" ] || git -C "$1" rev-parse --git-dir > /dev/null 2>&1
}

# Function to check if there are changes to commit
has_changes() {
    local dir="$1"
    cd "$dir"
    ! git diff-index --quiet HEAD -- 2>/dev/null || [ -n "$(git ls-files --others --exclude-standard)" ]
}

# Function to push submodule changes
push_submodule() {
    local submodule_path="$1"
    local submodule_name="$(basename "$submodule_path")"
    
    echo -e "\n${YELLOW}📁 Processing: $submodule_name${NC}"
    
    if ! is_git_repo "$submodule_path"; then
        echo -e "${RED}❌ Not a git repository: $submodule_path${NC}"
        return 1
    fi
    
    cd "$submodule_path"
    
    # Check if there are changes
    if ! has_changes "."; then
        echo -e "${GREEN}✅ No changes in $submodule_name${NC}"
        return 0
    fi
    
    # Show status
    echo -e "${BLUE}📊 Git status:${NC}"
    git status --short
    
    # Add all changes
    echo -e "${BLUE}📦 Adding changes...${NC}"
    git add .
    
    # Check if there's anything to commit after adding
    if git diff-index --quiet HEAD -- 2>/dev/null; then
        echo -e "${GREEN}✅ No changes to commit in $submodule_name${NC}"
        return 0
    fi
    
    # Commit with timestamp
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local commit_message="Update $submodule_name - $timestamp

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    echo -e "${BLUE}💾 Committing changes...${NC}"
    git commit -m "$commit_message"
    
    # Push to remote
    echo -e "${BLUE}⬆️  Pushing to remote...${NC}"
    git push origin main
    
    echo -e "${GREEN}✅ Successfully pushed $submodule_name${NC}"
}

# Function to update main repository
update_main_repo() {
    echo -e "\n${YELLOW}🏠 Updating main repository${NC}"
    
    cd "$REPO_ROOT"
    
    # Add submodule changes
    git add .
    
    # Check if there are changes to commit
    if git diff-index --quiet HEAD -- 2>/dev/null; then
        echo -e "${GREEN}✅ No submodule references to update${NC}"
        return 0
    fi
    
    # Commit submodule updates
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local commit_message="Update submodule references - $timestamp

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    echo -e "${BLUE}💾 Committing submodule updates...${NC}"
    git commit -m "$commit_message"
    
    # Push main repository
    echo -e "${BLUE}⬆️  Pushing main repository...${NC}"
    git push origin main
    
    echo -e "${GREEN}✅ Successfully updated main repository${NC}"
}

# Main execution
main() {
    cd "$REPO_ROOT"
    
    # Define submodules
    local submodules=(
        "submodules/product/ki-platform"
        "submodules/business"
        "submodules/automation/n8n-workflows"
    )
    
    local success_count=0
    local total_count=${#submodules[@]}
    
    # Process each submodule
    for submodule in "${submodules[@]}"; do
        if [ -d "$submodule" ]; then
            if push_submodule "$submodule"; then
                ((success_count++))
            fi
        else
            echo -e "${RED}❌ Submodule not found: $submodule${NC}"
        fi
    done
    
    # Update main repository
    update_main_repo
    
    # Summary
    echo -e "\n${BLUE}📋 Summary${NC}"
    echo -e "${BLUE}==========${NC}"
    echo -e "${GREEN}✅ Processed: $success_count/$total_count submodules${NC}"
    echo -e "${GREEN}✅ Main repository updated${NC}"
    echo -e "\n${GREEN}🎉 All git operations completed successfully!${NC}"
}

# Run main function
main "$@"