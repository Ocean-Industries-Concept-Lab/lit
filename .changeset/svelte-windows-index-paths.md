---
'@oicl-lit/gen-wrapper-svelte': patch
---

Fix broken `src/lib/index.ts` exports for elements in subfolders when generating on Windows.

The module's source directory was used with Windows path separators, so the
generated re-export read `'.\sub/ElementSub.svelte'`, which JavaScript
evaluates to `.sub/ElementSub.svelte`.
