```markdown
# Farcaster Quiz Frame Specification Document

## 1. OVERVIEW

### Core Functionality
- Dynamic quiz game pulling questions from user's recent Farcaster casts
- 2-round interactive multiple choice format with 4 options per question
- Real-time scoring system with points rewards
- End-game summary with shareable results
- Blockchain-integrated user verification via Ethereum wallets

### UX Flow
1. Initial Frame: 
   - Animated welcome screen with "Start Quiz" call-to-action
   - Dynamic preview of cast-based questions

2. Question Rounds:
   - Full-screen question display with fade-in animation
   - Interactive answer grid with hover/tap effects
   - Immediate visual feedback for correct/incorrect answers

3. Results Screen:
   - Score breakdown with earned points
   - Animated confetti effect for high scores
   - Share button generating cast-embedded result card

## 2. TECHNICAL REQUIREMENTS

### Frontend Components
```html
<!-- Quiz Container -->
<div class="quiz-frame">
  <canvas id="animation-layer"></canvas>
  
  <!-- Question Card -->
  <div class="question-card">
    <h2 id="question-text"></h2>
    <div class="options-grid">
      <div class="option" data-id="1"></div>
      <div class="option" data-id="2"></div>
      <div class="option" data-id="3"></div>
      <div class="option" data-id="4"></div>
    </div>
  </div>

  <!-- Progress Indicator -->
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</div>
```

### API Integrations
1. **Neynar Cast Search API** (GET `/v2/farcaster/cast/search`)
   - Parameters:
     - `author_fid`: Current user's FID
     - `limit`: 50
     - `q`: "before:{current_date}"

2. **Degen Points API** (GET `/farcaster/wallets`)
   - Wallet-to-points mapping for rewards

### State Management
- **Quiz State Machine**:
  ```typescript
  type QuizState = {
    currentQuestion: number
    score: number
    questions: Array<{
      castHash: string
      question: string
      options: string[]
      correctIndex: number
    }>
    walletAddress: string
  }
  ```
- **Persisted State**:
  - URL hash parameters for deep linking
  - localStorage for session continuity

### Mobile Responsiveness
- CSS Grid-based layout with fractional units
- Touch-optimized controls (minimum 48x48px tap targets)
- Dynamic font scaling using `clamp()`
- Hardware-accelerated animations

## 3. FRAMES v2 IMPLEMENTATION

### Interactive Elements
1. **Canvas-based Game Engine**:
   - WebGL-powered transitions
   - Particle effects for correct answers

2. **Input Handling**:
   - Multi-touch support
   - Gesture recognition (swipe navigation)
   - Keyboard shortcuts (1-4 number keys)

3. **Dynamic Meta Updates**:
```typescript
function updateFrameMeta(score: number) {
  document.querySelector('meta[property="fc:frame"]')
    .setAttribute("content", `quiz_score_${score}`);
}
```

### Animation System
- CSS Keyframes for core interactions
- Web Animation API for complex sequences
- RequestAnimationFrame-based smooth transitions

### Notification Integration
- Wallet-linked achievement badges
- Progressive Web App push notifications
- Cast mention alerts through Neynar API

## 4. MOBILE CONSIDERATIONS

### Touch Optimization
- 8px touch target padding
- Passive event listeners for scroll
- Visual touch feedback ripples
- Prevent 300ms click delay

### Performance Strategy
- CSS will-change optimization
- Lazy-loaded animations
- Web Worker-based scoring calculations
- Critical CSS inlining

## 5. CONSTRAINTS COMPLIANCE

✅ **No Database Requirements**  
All state managed client-side through URL parameters and localStorage

✅ **No Smart Contracts**  
Points system uses existing Degen API endpoints

✅ **Approved APIs Only**  
Only uses Neynar and Degen APIs as specified

✅ **Complexity Control**  
Single codebase with zero external dependencies beyond SDKs

---

**Implementation Timeline**  
| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1     | 3 days   | Core quiz engine with Neynar integration |
| 2     | 2 days   | Animation system & mobile optimization |
| 3     | 1 day    | Degen points integration |
| 4     | 1 day    | Final polish & performance testing |
```