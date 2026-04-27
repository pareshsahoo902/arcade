## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2026-04-27 - Replicating hover animations for keyboard focus
**Learning:** When styling large interactive cards with complex `:hover` effects (like transforms, scales, and nested element animations), it's crucial to replicate these exact effects using `:focus-visible` to ensure keyboard users receive the same rich visual feedback.
**Action:** Always include corresponding `:focus-visible` rules alongside `:hover` rules for interactive components, and append an `outline` to the focus state to provide clear, accessible tracking.
