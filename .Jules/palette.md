## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2026-04-26 - Interactive Cards Keyboard Accessibility
**Learning:** Complex interactive elements like game cards with internal hover effects (e.g. child elements scaling/rotating) don't naturally extend these affordances to keyboard users. Just adding a focus outline isn't enough to convey the same richness as the hover state.
**Action:** When styling large interactive cards or complex elements with `:hover` effects, always replicate these exact effects using `:focus-visible` and append an `outline` to ensure consistent visual feedback and accessibility for keyboard navigation.
