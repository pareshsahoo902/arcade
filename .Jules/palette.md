## 2026-04-18 - Adding ARIA labels to icon buttons\n**Learning:** In plain HTML games relying heavily on canvas and emojis for UI, it is easy to overlook basic accessibility attributes for overlay buttons. Emojis alone don't provide adequate context for screen readers.\n**Action:** Always verify that buttons containing only icons or emojis have descriptive `aria-label` attributes.

## 2026-04-21 - Keyboard Focus States for Game Cards
**Learning:** Large interactive cards lacking custom `:focus-visible` states severely hinder keyboard accessibility. Relying only on `:hover` effects makes navigation confusing for users relying on keyboard tabs to move through lists.
**Action:** Always replicate `:hover` effects using `:focus-visible` for complex cards containing multiple elements (like logos, buttons), and add an `outline` to guarantee visual clarity on focus.
