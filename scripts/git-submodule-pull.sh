#!/bin/bash

# Git Submodule Pull Automation
# Pulls latest changes from all submodules and main repository

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}⬇️  Ki Submodule Pull Automation${NC}"
echo -e "${BLUE}================================${NC}"

# Function to check if directory is a git repository
is_git_repo() {
    [ -d "$1/.git" ] || git -C "$1" rev-parse --git-dir > /dev/null 2>&1
}

# Function to pull submodule changes
pull_submodule() {
    local submodule_path="$1"
    local submodule_name="$(basename "$submodule_path")"
    
    echo -e "\n${YELLOW}📁 Processing: $submodule_name${NC}"
    
    if ! is_git_repo "$submodule_path"; then
        echo -e "${RED}❌ Not a git repository: $submodule_path${NC}"
        return 1
    fi
    
    cd "$submodule_path"
    
    # Check current branch
    local current_branch=$(git branch --show-current 2>/dev/null || echo "detached")
    echo -e "${BLUE}🌿 Current branch: $current_branch${NC}"
    
    # Fetch latest changes
    echo -e "${BLUE}🔄 Fetching latest changes...${NC}"
    git fetch origin
    
    # Check if we're behind
    local behind=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "0")
    
    if [ "$behind" -eq 0 ]; then
        echo -e "${GREEN}✅ Already up to date: $submodule_name${NC}"
        return 0
    fi
    
    echo -e "${YELLOW}⬇️  Pulling $behind commits...${NC}"
    
    # Pull changes
    git pull origin main
    
    echo -e "${GREEN}✅ Successfully updated $submodule_name${NC}"
}

# Function to update main repository
pull_main_repo() {
    echo -e "\n${YELLOW}🏠 Updating main repository${NC}"
    
    cd "$REPO_ROOT"
    
    # Fetch latest changes
    echo -e "${BLUE}🔄 Fetching latest changes...${NC}"
    git fetch origin
    
    # Check if we're behind
    local behind=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "0")
    
    if [ "$behind" -eq 0 ]; then
        echo -e "${GREEN}✅ Main repository already up to date${NC}"
    else
        echo -e "${YELLOW}⬇️  Pulling $behind commits...${NC}"
        git pull origin main
        echo -e "${GREEN}✅ Successfully updated main repository${NC}"
    fi
    
    # Update submodule references
    echo -e "${BLUE}🔄 Updating submodule references...${NC}"
    git submodule update --remote --merge
    
    echo -e "${GREEN}✅ Submodule references updated${NC}"
}

# Main execution
main() {
    cd "$REPO_ROOT"
    
    # First update main repository
    pull_main_repo
    
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
            if pull_submodule "$submodule"; then
                ((success_count++))
            fi
        else
            echo -e "${RED}❌ Submodule not found: $submodule${NC}"
        fi
    done
    
    # Summary
    echo -e "\n${BLUE}📋 Summary${NC}"
    echo -e "${BLUE}==========${NC}"
    echo -e "${GREEN}✅ Updated: $success_count/$total_count submodules${NC}"
    echo -e "${GREEN}✅ Main repository updated${NC}"
    echo -e "\n${GREEN}🎉 All repositories are now up to date!${NC}"
}

# Run main function
main "$@"