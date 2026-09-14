---
'@oicl-lit/gen-wrapper-svelte': minor
---

Render parameterized slots whose names the element computes.

A slot documented as `@slot cell-<key>-<row>-icon` gets a snippet rendered once
per entry of the element's `cellIconSlots` property when the element also
documents a `cell-icon-slots-change` event: the slot name without its
placeholders names both. The wrapper reads the list on mount and on every change
event, and keys each `NamedSlot` by the entry's `name`. The names can depend on
element state and hold any number of placeholders, which the loop over a
consumer prop cannot express. A matching collection prop still takes
precedence. The snippet argument is typed from the event's `detail` entries.
