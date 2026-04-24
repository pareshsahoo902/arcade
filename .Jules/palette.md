## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2026-04-24 - Consistent keyboard navigation feedback for complex cards
**Learning:** When using large interactive cards with complex `:hover` animations involving child elements, keyboard users miss these affordances if only `:hover` is used.
**Action:** Replicate all complex card `:hover` animations on `:focus-visible` and append an explicit `outline` (using `outline-offset`) to ensure screen reader and keyboard accessibility matching the intended visual design.
