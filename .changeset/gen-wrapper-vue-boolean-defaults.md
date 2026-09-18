---
'@oicl-lit/gen-wrapper-vue': patch
---

Declare boolean props with `default: undefined`, so an omitted boolean prop leaves the element's own default in place instead of Vue's `false`.
