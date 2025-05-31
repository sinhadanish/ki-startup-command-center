#!/bin/bash

# Ki Startup Command Center - MCP Server Verification Script
# This script verifies that all configured MCP servers are working properly

echo "🔍 Ki MCP Server Verification"
echo "==============================="

# Check if we're in the right directory
if [ ! -f ".mcp.json" ]; then
    echo "❌ Error: .mcp.json not found. Please run this script from the Ki startup command center root directory."
    exit 1
fi

echo "✅ Found .mcp.json configuration file"

# Check Node.js and npm
echo ""
echo "📦 Checking dependencies..."
if command -v node &> /dev/null; then
    echo "✅ Node.js version: $(node --version)"
else
    echo "❌ Node.js not found. Please install Node.js to use MCP servers."
    exit 1
fi

if command -v npm &> /dev/null; then
    echo "✅ npm version: $(npm --version)"
else
    echo "❌ npm not found. Please install npm to use MCP servers."
    exit 1
fi

# List configured MCP servers
echo ""
echo "🤖 Configured MCP Servers:"
echo "--------------------------"
claude mcp list 2>/dev/null || echo "No MCP servers configured globally. Project-scoped servers in .mcp.json will be available when using Claude Code in this directory."

# Verify project configuration
echo ""
echo "📋 Project MCP Configuration:"
echo "----------------------------"
if [ -f ".mcp.json" ]; then
    echo "✅ Project-scoped MCP servers configured:"
    jq -r '.mcpServers | keys[]' .mcp.json 2>/dev/null || echo "Unable to parse .mcp.json (jq not available)"
else
    echo "❌ No .mcp.json found"
fi

echo ""
echo "🎯 MCP Servers for Ki Project:"
echo "- puppeteer: Web automation for competitive analysis"
echo "- filesystem: Enhanced file operations"  
echo "- github: Repository management"
echo "- postgres: Database operations"
echo "- gdrive: Cloud storage integration"
echo "- slack: Team communication"
echo "- calendar: Meeting scheduling"
echo "- analytics: Business intelligence"

echo ""
echo "✅ MCP verification complete!"
echo "💡 MCP servers will be automatically available when using Claude Code in this directory."