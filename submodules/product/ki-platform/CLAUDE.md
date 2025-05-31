# CLAUDE.md - Ki Platform Development

This file provides guidance to Claude Code when working with Ki's relationship intelligence platform.

## Platform Overview

Ki Platform is the core technology behind the world's first Human-AI-Human relationship intelligence system. This is a sophisticated AI-powered platform that simultaneously processes both partners in a relationship while maintaining individual privacy and generating empathy-driven insights.

## Repository Structure

```
ki-platform/
├── apps/
│   ├── web/                      # Marketing website (Next.js)
│   ├── app/                      # Main Ki relationship app (React Native)
│   ├── api/                      # REST API layer (FastAPI)
│   └── langgraph-backend/        # LangGraph AI engine (Python)
├── packages/
│   ├── auth/                     # Authentication system
│   ├── database/                 # Database models and ORM
│   ├── ai-engine/               # Shared AI utilities
│   ├── ui/                      # Design system components
│   └── voice/                   # Voice processing utilities
```

## Core Technology Principles

### Human-AI-Human Framework
The foundational innovation that differentiates Ki from all other AI systems:

```python
# Ki's dual-partner processing architecture
class KiRelationshipState(TypedDict):
    partner_a_messages: List[BaseMessage]    # Private channel A
    partner_b_messages: List[BaseMessage]    # Private channel B
    emotional_states: Dict[str, Any]         # Dual emotional analysis
    empathy_insights: Dict[str, Any]         # Relationship intelligence
    personalized_responses: Dict[str, str]   # Dual responses
    shared_insights: List[str]               # Joint understanding
```

### Empathy AI Layer
Sophisticated emotional intelligence that goes beyond traditional NLP:
- **Emotional State Detection**: Real-time analysis of voice, text, and behavioral patterns
- **Pattern Recognition**: Identifies relationship dynamics without clinical labeling
- **Adaptive Responses**: Interface and content adapt to emotional context
- **Contextual Memory**: Builds understanding over time for each relationship

### Privacy-First Architecture
- **Individual Privacy Channels**: Each partner has encrypted private communication
- **Secure Shared Context**: Relationship-level insights without exposing private details
- **Zero-Knowledge Processing**: AI learns patterns without storing raw sensitive data
- **End-to-End Encryption**: All relationship data protected at rest and in transit

## Development Guidelines

### LangGraph AI Engine (`apps/langgraph-backend/`)

#### Core Graph Structure
```python
# Ki's relationship intelligence workflow
intake → safety_check → emotional_analysis → conflict_detection 
→ anxiety_detection → empathy_processing → pattern_recognition 
→ response_generation → memory_update
```

#### Key Components
- **Empathy Agent**: Generates emotionally intelligent responses
- **Conflict Resolution Agent**: Mediates relationship conflicts
- **Pattern Recognition Agent**: Identifies relationship dynamics
- **Anxiety Detection Agent**: Monitors emotional wellbeing
- **Safety Detection**: Identifies concerning situations

#### Performance Requirements
- **Voice Latency**: <100ms response time
- **Emotion Detection**: >89% accuracy
- **Anxiety Detection**: >94% accuracy
- **Concurrent Processing**: 10,000+ simultaneous relationships

### Frontend Development

#### Design System Principles
- **Emotional Responsiveness**: UI adapts to detected emotional states
- **Breathing Interface**: Pulsing, organic animations that feel alive
- **Voice-First**: Seamless voice-visual integration
- **Adaptive Typography**: Text weight and spacing respond to emotional context

#### Key UX Patterns
```javascript
// Emotional state-responsive interface
const EmotionalInterface = {
  calm: { colors: 'blue-gradient', timing: 'normal' },
  stressed: { colors: 'warm-gradient', timing: 'slower' },
  excited: { colors: 'celebration', timing: 'energetic' },
  supportive: { colors: 'soft-purple', timing: 'gentle' }
}
```

### Voice Integration
- **Natural Conversation**: No command-response patterns, flowing dialogue
- **Emotional Attunement**: Voice response adapts to user's emotional state
- **Contextual Memory**: References previous conversations meaningfully
- **Crisis Support**: Immediate availability during relationship conflicts

## Code Standards

### AI Development
```python
# Example: Empathy-driven response generation
async def generate_empathy_response(
    emotional_state: EmotionalState,
    relationship_context: RelationshipContext,
    conversation_history: List[Message]
) -> EmpathyResponse:
    """
    Generate responses that feel like insights, not analysis
    - Use "I notice..." not "You are..."
    - Reframe differences as complementary, not problematic
    - Connect patterns to growth opportunities
    """
```

### Privacy Implementation
```python
# Individual privacy channel
class PrivateChannel:
    def __init__(self, partner_id: str):
        self.encryption_key = generate_partner_key(partner_id)
        self.private_memory = PartnerMemory(partner_id)
    
    async def process_private_message(self, message: str) -> str:
        # Process without exposing to partner or shared context
        pass
```

### Response Quality Standards
Every AI response must:
- Validate emotional experience first
- Offer new perspective without dismissing theirs
- Use user's own language and examples
- End with invitation for their thoughts
- Build toward transformation, not just understanding

## Testing Strategy

### Relationship Scenarios
Test with realistic couple dynamics:
- **Communication Styles**: Different approaches to conflict and connection
- **Emotional Patterns**: Various anxiety, stress, and joy responses
- **Cultural Contexts**: Diverse relationship norms and expectations
- **Life Stages**: Dating, engaged, married, parenting transitions

### AI Quality Assurance
- **Empathy Validation**: Responses feel supportive, not clinical
- **Pattern Accuracy**: Relationship insights are helpful and accurate
- **Privacy Verification**: Partner data never leaks across channels
- **Safety Detection**: Concerning situations properly identified

### Performance Testing
- **Voice Latency**: <100ms response times under load
- **Concurrent Users**: 10,000+ simultaneous relationship processing
- **Emotional Intelligence**: Accuracy benchmarks for mood detection
- **Memory Efficiency**: Relationship context without data bloat

## Integration Points

### External Services
- **Hume AI**: Emotional voice analysis and empathy modeling
- **OpenAI**: Language modeling and conversation intelligence
- **Anthropic**: Ethical AI and nuanced understanding
- **Voice Providers**: Natural speech synthesis and recognition

### Security & Compliance
- **HIPAA Compliance**: Healthcare-grade data protection
- **End-to-End Encryption**: All relationship communications protected
- **Zero-Knowledge Architecture**: Learn without storing sensitive details
- **Audit Logging**: Track access and processing for compliance

## Deployment & Scaling

### Development Environment
```yaml
# docker-compose.yml integration
ki-app:
  ports: ["3001:3000"]
  environment:
    - OPENAI_API_KEY=${OPENAI_API_KEY}
    - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    - HUME_API_KEY=${HUME_API_KEY}
```

### Production Architecture
- **Microservices**: Individual processing, relationship analysis, empathy generation
- **Real-time**: WebSocket connections for voice and instant messaging
- **Global CDN**: Low-latency voice processing worldwide
- **Auto-scaling**: Handle relationship crisis traffic spikes

## Key Success Metrics

### Product Metrics
- **User Engagement**: Conversation frequency and depth
- **Relationship Outcomes**: Reported satisfaction improvements
- **AI Quality**: User ratings of insights and responses
- **Retention**: Long-term platform usage and growth

### Technical Metrics
- **Response Time**: Voice and text interaction latency
- **Uptime**: 99.9%+ availability for relationship support
- **Accuracy**: Emotional detection and pattern recognition
- **Scalability**: Concurrent relationship processing capacity

This platform represents the technical foundation for Ki's revolutionary approach to relationship intelligence - technology that strengthens human bonds rather than replacing them.