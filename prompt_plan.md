# Farcaster Quiz Frame Implementation Prompts

## Phase 1: Core Infrastructure Setup

### Prompt 1: Initialize Next.js Project Structure
```text
Create a Next.js 14 project with TypeScript using our existing template. Include:
1. Customize page titles and metadata in layout.tsx
2. Set up base CSS variables for mobile-first design
3. Create empty components: <QuizContainer>, <QuestionCard>, <ProgressBar>
4. Configure API routes for /api/neynar and /api/degen
5. Add core state interfaces matching the QuizState specification
```

### Prompt 2: Implement Frame State Management
```text
Create a state management system using URL search params and localStorage:
1. Implement useQuizState hook with TypeScript interface
2. Sync state with URL hash parameters
3. Add localStorage persistence on question transitions
4. Create state recovery logic on mount
5. Add validation for walletAddress and questions array
```

## Phase 2: Neynar Integration & Question Processing

### Prompt 3: Fetch User Casts from Neynar API
```text
Implement Neynar cast search integration:
1. Create API route handler /api/neynar-casts with auth
2. Add server-side validation for FID parameter
3. Implement error handling for API rate limits
4. Add caching mechanism with revalidation logic
5. Wire to UI through a useFetchCasts hook
```

### Prompt 4: Cast-to-Question Transformation Logic
```text
Create processing logic for converting casts to quiz questions:
1. Implement sanitizeCastText() function
2. Add generateDistractors() algorithm using cast metadata
3. Create question validator with Zod schema
4. Add shuffle algorithm for answer options
5. Wire to state management with error boundaries
```

## Phase 3: Core Quiz Interaction

### Prompt 5: Question Display Component
```text
Build the QuestionCard component with:
1. Dynamic text sizing using CSS clamp()
2. Touch-optimized option grid layout
3. Visual feedback states (correct/incorrect)
4. Animation-ready CSS classes
5. Keyboard navigation support
```

### Prompt 6: Progress Tracking System
```text
Implement the ProgressBar component:
1. CSS Grid-based fractional layout
2. Smooth transition animations
3. Win state detection logic
4. Mobile viewport adaptation
5. Performance monitoring integration
```

## Phase 4: Game Dynamics & Scoring

### Prompt 7: Scoring System Implementation
```text
Create real-time scoring logic:
1. Add point calculation based on response time
2. Implement streak multiplier system
3. Create scoring animation system
4. Add Web Worker for score validation
5. Integrate with state management
```

### Prompt 8: Degen API Points Integration
```text
Connect to Degen points system:
1. Create /api/degen-points endpoint
2. Add wallet signature verification
3. Implement points caching strategy
4. Add error recovery flow
5. Wire to results screen component
```

## Phase 5: Mobile Optimization & Polish

### Prompt 9: Touch Interaction System
```text
Implement mobile-first interaction:
1. Add touch ripple effects
2. Prevent zoom/scroll during quiz
3. Implement swipe navigation safeguards
4. Add 48px touch target padding
5. Optimize CSS for mobile GPUs
```

### Prompt 10: Animation Framework
```text
Create animation system with:
1. WebGL-powered confetti effect
2. CSS keyframe transitions
3. RequestAnimationFrame timer
4. Hardware-accelerated transforms
5. Lazy-loaded animation assets
```

## Phase 6: Final Integration & Testing

### Prompt 11: State Wiring & Validation
```text
Connect all components with:
1. End-to-end state flow validation
2. Add loading/error states
3. Implement session recovery
4. Add analytics instrumentation
5. Performance budget enforcement
```

### Prompt 12: Final Compliance Check
```text
Implement Farcaster Frame v2 requirements:
1. Add meta tag updates on state change
2. Validate frame response times
3. Add cast embed testing
4. Implement wallet verification flow
5. Add PWA manifest configuration
```

Each prompt builds on previous implementations with clear integration points. The sequence ensures:  
1. Progressive complexity growth  
2. Mobile-first validation at each stage  
3. Continuous state management integration  
4. Performance considerations throughout  
5. Compliance with specified constraints  

Final output will be a fully integrated quiz frame meeting all spec requirements with production-ready characteristics.