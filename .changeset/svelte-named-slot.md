---
'@oicl-lit/gen-wrapper-svelte': patch
---

Render named slot content natively in generated Svelte wrappers.

Wrappers used to project named-slot snippets through a `<div slot="…">`, which
broke percentage sizing and the component's `::slotted()` rules. Generated
packages now include a shared `NamedSlot` component that renders the snippet
directly into the custom element and sets `slot` on its top-level elements. It
falls back to a `display: contents` wrapper only when the snippet renders text.
