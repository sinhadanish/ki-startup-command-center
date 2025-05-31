#!/bin/bash

# Git Submodule Status Check
# Shows status of all submodules and main repository

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}📊 Ki Submodule Status Report${NC}"
echo -e "${BLUE}=============================${NC}"

# Function to check if directory is a git repository
is_git_repo() {
    [ -d "$1/.git" ] || git -C "$1" rev-parse --git-dir > /dev/null 2>&1
}

# Function to get git status info
get_git_status() {
    local dir="$1"
    cd "$dir"
    
    local branch=$(git branch --show-current 2>/dev/null || echo "detached")
    local status=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
    local ahead=$(git rev-list --count @{u}..HEAD 2>/dev/null || echo "0")
    local behind=$(git rev-list --count HEAD..@{u} 2>/dev/null || echo "0")
    
    echo "$branch|$status|$ahead|$behind"
}

# Function to show repository status
show_repo_status() {
    local repo_path="$1"
    local repo_name="$2"
    
    echo -e "\n${PURPLE}📁 $repo_name${NC}"
    local line_length=$((${#repo_name} + 4))
    echo -e "${PURPLE}$(printf '%.0s─' $(seq 1 $line_length))${NC}"
    
    if ! is_git_repo "$repo_path"; then
        echo -e "${RED}❌ Not a git repository${NC}"
        return 1
    fi
    
    local status_info=$(get_git_status "$repo_path")
    IFS='|' read -r branch changes ahead behind <<< "$status_info"
    
    # Branch info
    echo -e "${BLUE}🌿 Branch:${NC} $branch"
    
    # Changes info
    if [ "$changes" -eq 0 ]; then
        echo -e "${GREEN}✅ Working tree clean${NC}"
    else
        echo -e "${YELLOW}📝 Changes: $changes files${NC}"
        cd "$repo_path"
        git status --short | head -10
        if [ "$changes" -gt 10 ]; then
            echo -e "${YELLOW}   ... and $((changes - 10)) more files${NC}"
        fi
    fi
    
    # Remote sync info
    if [ "$ahead" -eq 0 ] && [ "$behind" -eq 0 ]; then
        echo -e "${GREEN}🔄 In sync with remote${NC}"
    else
        if [ "$ahead" -gt 0 ]; then
            echo -e "${YELLOW}⬆️  Ahead by $ahead commits${NC}"
        fi
        if [ "$behind" -gt 0 ]; then
            echo -e "${YELLOW}⬇️  Behind by $behind commits${NC}"
        fi
    fi
    
    # Last commit info
    cd "$repo_path"
    local last_commit=$(git log -1 --pretty=format:'%h - %s (%cr)' 2>/dev/null)
    echo -e "${BLUE}📝 Last commit:${NC} $last_commit"
}

# Main execution
main() {
    cd "$REPO_ROOT"
    
    # Show main repository status
    show_repo_status "$REPO_ROOT" "Main Repository (ki-startup-command-center)"
    
    # Define submodules
    local submodules_paths=(
        "submodules/product/ki-platform"
        "submodules/business" 
        "submodules/automation/n8n-workflows"
    )
    local submodules_names=(
        "Ki Platform (Next Forge)"
        "Ki Business Operations"
        "Ki Automation (n8n)"
    )
    
    # Show each submodule status
    for i in "${!submodules_paths[@]}"; do
        local submodule_path="${submodules_paths[$i]}"
        local submodule_name="${submodules_names[$i]}"
        
        if [ -d "$submodule_path" ]; then
            show_repo_status "$submodule_path" "$submodule_name"
        else
            echo -e "\n${PURPLE}📁 $submodule_name${NC}"
            echo -e "${RED}❌ Directory not found: $submodule_path${NC}"
        fi
    done
    
    # Summary
    echo -e "\n${BLUE}🎯 Quick Actions${NC}"
    echo -e "${BLUE}===============${NC}"
    echo -e "${GREEN}• To push all changes:${NC} ./scripts/git-submodule-push.sh"
    echo -e "${GREEN}• To pull latest:${NC} ./scripts/git-submodule-pull.sh"
    echo -e "${GREEN}• To check status:${NC} ./scripts/git-submodule-status.sh"
}

# Run main function
main "$@"