---
'@oicl-lit/gen-wrapper-svelte': minor
---

Render parameterized slots whose names the element computes.

A slot documented as `@slot <prefix>-<placeholder>…` gets a snippet rendered
once per entry of the element's `<prefix>Slots` property when the element also
documents a `<prefix>-slots-change` event. The wrapper reads the list on mount
and on every change event, and keys each `NamedSlot` by the entry's `name`. The
names can depend on element state and hold any number of placeholders, which
the existing loop over a consumer prop cannot express. The snippet argument is
typed from the event's `detail` entries.
