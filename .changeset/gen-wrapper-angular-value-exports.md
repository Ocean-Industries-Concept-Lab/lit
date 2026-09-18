---
'@oicl-lit/gen-wrapper-angular': patch
---

Re-export the enums, classes and constants that property and event types reference as runtime values (`export {X} from …`), so the published typings and the bundle agree; interfaces and type aliases stay `export type`.
