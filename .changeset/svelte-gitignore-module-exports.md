---
'@oicl-lit/gen-wrapper-svelte': patch
---

Fix the generated `.gitignore` and per-module export files.

- `.gitignore` now ignores `.svelte-kit/`, `dist/` and `node_modules/`. It was
  copied from the Vue generator and listed paths like `/lib/ElementA.svelte.*`,
  which don't exist in a Svelte package.
- When one source module declares several elements, the file re-exporting them
  is now written next to the wrappers in `src/lib` with one export per line.
  Previously it landed outside `src/lib`, where its `./` imports didn't
  resolve, and the exports were joined with a literal `/n`.
