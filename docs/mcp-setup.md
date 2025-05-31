# Ki MCP Server Configuration

## Overview

This Ki startup project includes comprehensive MCP (Model Context Protocol) server configuration to enhance Claude Code capabilities with specialized tools for startup operations, development, and business intelligence.

## Configured MCP Servers

### 🕷️ **Puppeteer** - Web Automation
**Purpose**: Web scraping, competitive analysis, automated testing
**Use Cases**:
- Monitor competitor websites (Relish, Lasting, Paired pricing/features)
- Automate market research data collection
- Screenshot generation for presentations
- A/B testing automation
- App store review analysis

### 📁 **Filesystem** - Enhanced File Operations  
**Purpose**: Advanced file management and document processing
**Use Cases**:
- Data room document organization and updates
- Automated backup of critical business files
- Batch processing of financial documents
- Document version control and archiving

### 🐙 **GitHub** - Repository Management
**Purpose**: Multi-repository coordination across Ki's codebase
**Use Cases**:
- Manage ki-platform, ki-business, ki-automation repositories
- Track development milestones and release planning
- Issue management and project coordination
- Code review automation and quality checks

### 🗄️ **PostgreSQL** - Database Operations
**Purpose**: User data analysis and business metrics
**Use Cases**:
- User conversation pattern analysis
- Customer acquisition and retention metrics
- Financial KPI tracking and reporting
- A/B testing results analysis

### ☁️ **Google Drive** - Cloud Storage Integration
**Purpose**: Document sharing and collaborative workflows
**Use Cases**:
- Investor document sharing and access management
- Team collaboration on business documents
- Automated backup of critical files
- Version control for pitch decks and financial models

### 💬 **Slack** - Team Communication Automation
**Purpose**: Automated notifications and team coordination
**Use Cases**:
- Daily metrics reporting to team channels
- Investor update notifications
- Customer feedback alerts
- Development milestone announcements

### 📅 **Calendar** - Meeting & Milestone Management
**Purpose**: Scheduling and time management automation
**Use Cases**:
- Investor meeting scheduling and coordination
- Team planning and milestone tracking
- Customer interview scheduling
- Board meeting and review planning

### 📊 **Analytics** - Business Intelligence
**Purpose**: User behavior analysis and business metrics
**Use Cases**:
- User engagement and retention analysis
- Conversion funnel optimization
- Customer lifetime value tracking
- Product usage pattern analysis

## Usage Examples

### Competitive Analysis with Puppeteer
```javascript
// Monitor competitor pricing changes
await navigateToPage("https://relish.so/pricing");
const pricing = await extractText(".pricing-card");
await saveToFile("competitor-pricing.json", pricing);
```

### Database Analytics with PostgreSQL
```sql
-- Analyze user conversation patterns
SELECT date_trunc('day', created_at) as day, 
       COUNT(*) as conversations,
       AVG(session_length) as avg_length
FROM user_conversations 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY day
ORDER BY day;
```

### Document Management with Filesystem
```bash
# Organize investor documents
organize_files("./data-room/", by="type", structure="investor-ready")
backup_directory("./data-room/", "gs://ki-backup/data-room/")
```

### Team Communication with Slack
```javascript
// Send daily metrics to team
const metrics = await getMetrics();
await sendSlackMessage("#team-updates", `
Daily Metrics Update:
- New Users: ${metrics.newUsers}
- Conversations: ${metrics.conversations}
- Conversion Rate: ${metrics.conversionRate}%
`);
```

## Setup Verification

Run the verification script to ensure all MCP servers are properly configured:

```bash
./scripts/verify-mcp.sh
```

## Configuration Files

- **`.mcp.json`**: Project-scoped MCP server configuration
- **`scripts/verify-mcp.sh`**: MCP server verification script
- **`.gitignore`**: Excludes sensitive MCP credentials

## Security Considerations

- MCP server configurations are shared with the team via `.mcp.json`
- Sensitive credentials should be stored in `.mcp.local.json` (gitignored)
- All database operations follow HIPAA compliance patterns
- Web automation respects robots.txt and rate limiting

## Team Usage

When team members use Claude Code in this directory, all configured MCP servers will be automatically available, providing enhanced capabilities for:

- **Product Development**: Database analysis, GitHub management, file operations
- **Business Operations**: Analytics, calendar management, document sharing
- **Growth & Marketing**: Web automation, competitive analysis, user research
- **Fundraising**: Investor document management, meeting coordination, metrics reporting

## Troubleshooting

If MCP servers aren't working:

1. Verify Node.js and npm are installed: `node --version && npm --version`
2. Check project directory: Ensure you're in `/startup-command-center/`
3. Validate configuration: `cat .mcp.json | jq .`
4. Run verification: `./scripts/verify-mcp.sh`

For specific server issues, check the MCP server documentation or contact the development team.