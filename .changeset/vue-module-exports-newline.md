---
'@oicl-lit/gen-wrapper-vue': patch
---

Put each export on its own line in the file that re-exports several elements from one source module. They were joined with a literal `/n`, producing an invalid module.
