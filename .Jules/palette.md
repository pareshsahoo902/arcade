## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2024-05-24 - Interactive Card Focus States
**Learning:** When styling large interactive cards or complex elements with rich `:hover` effects (like translation, scaling, inner element animations), it is crucial to replicate these exact effects using `:focus-visible` to ensure equal visual feedback and accessibility for keyboard navigation.
**Action:** Always map `:hover` effects directly to `:focus-visible` (e.g., `card:hover, card:focus-visible`) and append an `outline` to the `:focus-visible` state for undeniable keyboard indication.
