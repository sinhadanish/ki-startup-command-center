# CLAUDE.md - Ki Startup Command Center

This file provides guidance to Claude Code (claude.ai/code) when working with Ki's startup command center repository.

## Repository Overview

This is Ki's comprehensive startup command center - a structured environment for building the world's first Human-AI-Human relationship intelligence platform. The repository integrates product development, business operations, and team management for a lean 3-person startup focused on transforming how couples navigate their relationships through AI.

## Repository Structure

```
startup-command-center/
├── submodules/
│   ├── product/ki-platform/          # Ki's relationship intelligence platform
│   │   ├── apps/web/                 # Marketing website (Next.js)
│   │   ├── apps/app/                 # Main Ki relationship app (React Native)
│   │   ├── apps/api/                 # REST API layer (FastAPI)
│   │   └── apps/langgraph-backend/   # LangGraph AI engine (Python)
│   ├── business/                     # Customer development & fundraising
│   └── automation/n8n-workflows/    # Business automation workflows
├── data-room/                        # Comprehensive investor data room
├── planning/                         # Weekly goals & MVP roadmap
├── operations/                       # Team sync & metrics tracking
└── growth/                          # Customer development & partnerships
```

## Key Business Context

### Company
**Ki** - The World's First Human-AI-Human Relationship Intelligence Platform

### Core Innovation
Ki's proprietary Human-AI-Human framework enables simultaneous processing of both partners in a relationship while maintaining individual privacy and generating relationship-aware insights.

### Stage & Funding
- **Stage**: Pre-seed fundraising ($1.5M at $10M post-money)
- **Market**: $50B relationship support market, targeting therapy-priced-out couples
- **Traction**: 1,600+ conversations, 10% conversion rate, beta testing phase

### Technology Stack
- **AI Engine**: LangGraph with OpenAI GPT-4 + Anthropic Claude
- **Frontend**: Next.js (web), React Native (mobile)
- **Backend**: FastAPI with Python
- **Database**: PostgreSQL + Redis
- **Automation**: n8n workflows for business processes

## Core Product Principles

### Human-AI-Human Framework
Unlike traditional AI that serves individual users, Ki processes both partners simultaneously:
```
Partner A → Private Channel → Ki AI Core ← Private Channel ← Partner B
                              ↓
                         Empathy AI Layer
                              ↓
                    Personalized Dual Responses
```

### Design Philosophy
- **Voice-First**: Natural conversation during conflicts, not forms
- **Emotional Intelligence**: Interface adapts to emotional states
- **Pattern Recognition**: Identifies relationship dynamics without clinical labels
- **Privacy-First**: End-to-end encryption with individual privacy channels

### Key Differentiators
- **Real-time conflict support** during actual relationship moments
- **Relationship memory** that builds understanding over time
- **Empathy AI layer** with sophisticated emotional intelligence
- **No pathologizing** - strengths-based pattern recognition

## Development Guidelines

### LangGraph AI Engine
The core relationship intelligence runs on a sophisticated LangGraph workflow:
```python
# Ki's AI processing flow
intake → safety_check → emotional_analysis → conflict_detection 
→ anxiety_detection → empathy_processing → pattern_recognition 
→ response_generation → memory_update
```

### Code Standards
- **Privacy-First**: All relationship data encrypted, zero-knowledge architecture
- **Emotional Responsiveness**: UI adapts to detected emotional states
- **Voice Integration**: Seamless voice-visual interaction
- **Multi-Partner Support**: Handle simultaneous dual-user processing

### Testing Approach
- **Relationship Scenarios**: Test with realistic couple dynamics
- **Emotional Intelligence**: Validate empathy and insight delivery
- **Privacy Verification**: Ensure partner data separation
- **Performance**: <100ms voice response times

## Business Context & Goals

### 3-Person Team Structure
- **Tech/Product (1 person)**: Building MVP with LangGraph AI backend
- **Business (2 people)**: Customer development, market research, fundraising
- **Stage**: Pre-revenue, pre-product, focused on MVP and first customers

### Current Priorities
1. **Product**: Complete conversational AI interface with breathing design
2. **Business**: Interview 5+ couples about relationship challenges weekly
3. **Fundraising**: Research AI + relationship market, prepare pitch materials
4. **Automation**: Streamline customer development and team processes

### Success Metrics
- **Product**: Deploy working conversational interface with empathy AI
- **Business**: Complete 20+ customer interviews, identify patterns
- **Fundraising**: Complete market analysis, investor-ready materials
- **Team**: Efficient workflows, weekly goal achievement

## Customer Development Focus

### Target Market
- **Primary**: Therapy-priced-out couples (25M US couples, $30-60K income)
- **Demographics**: Ages 22-35, digitally native, relationship-focused
- **Pain Point**: Need help but can't afford $150-300/session therapy

### Research Insights
- 78% of couples: "We have the same fight over and over"
- 83% struggling: "We love each other but can't communicate"
- 72% willing to pay $20-30/month for AI relationship support

## Key Files & Directories

### Critical Product Files
- `submodules/product/ki-platform/apps/langgraph-backend/src/graphs/ki_relationship_graph.py`: Core AI relationship intelligence
- `submodules/product/ki-platform/apps/langgraph-backend/src/main.py`: FastAPI application entry point
- `docker-compose.yml`: Complete development environment setup

### Business Intelligence
- `data-room/00-executive-summary/ki-executive-summary.md`: Company overview and investment thesis
- `data-room/01-product-intelligence/human-ai-human-framework.md`: Technical product differentiation
- `data-room/02-market-opportunity/relationship-intelligence-market.md`: Market analysis and sizing

### Team Operations
- `planning/weekly-goals.md`: Weekly focus areas and individual goals
- `planning/mvp-roadmap.md`: Product development roadmap and milestones
- `operations/`: Team sync notes, task tracking, metrics

### Automation Workflows
- `submodules/automation/n8n-workflows/`: Customer interview tracking, team notifications
- `Makefile`: Simple development commands (`make setup`, `make dev`)

## Privacy & Ethics

### Data Handling
- All relationship conversations are highly sensitive personal data
- Implement end-to-end encryption for all partner communications
- Maintain strict separation between partners' private data
- Follow HIPAA compliance guidelines for healthcare-grade security

### Ethical AI
- No psychological diagnosis or clinical labeling
- Strengths-based pattern recognition, not deficit-focused
- Transparent AI decision-making with user control
- Professional therapy referral for serious concerns

## Development Environment

### Quick Start
```bash
make setup    # Complete environment setup
make dev      # Start development environment
```

### Access Points
- **Ki App**: http://localhost:3001
- **API**: http://localhost:8000
- **n8n Automation**: http://localhost:5678
- **Marketing Site**: http://localhost:3000

### Key Commands
- `make ki-setup`: Initialize Ki platform specifically
- `make n8n`: Open automation dashboard
- `make stop`: Stop all services
- `make clean`: Clean up development environment

## Investor Context

### Current Round
- **Ask**: $1.5M pre-seed at $10M post-money valuation
- **Lead**: Kalaari Capital (in discussions)
- **Use**: 40% product development, 35% team expansion, 25% growth

### Competitive Moat
- **Technical**: 2-3 year lead with Human-AI-Human framework
- **Market**: First-mover in relationship intelligence category
- **Team**: Proven AI/ML and scaling expertise
- **Partnerships**: Professional therapist network

This repository represents Ki's complete startup infrastructure, designed to scale from 3-person team to Series A readiness while building the future of AI-powered relationship intelligence.