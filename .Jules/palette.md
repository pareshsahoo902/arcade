## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2026-04-19 - Semantic HTML for Dynamic Buttons
**Learning:** When programmatically generating interactive UI elements like choice cards, it's easy to default to creating `div` elements with `onclick` handlers. However, this strips away native keyboard accessibility (Tab navigation and Enter/Space to select) and screen reader support.
**Action:** Always use semantic `<button>` tags when generating interactive elements, applying CSS resets if necessary to achieve the desired visual style.
