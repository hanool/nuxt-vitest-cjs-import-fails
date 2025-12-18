# Nuxt test util fails cjs import

Run

```bash
npx vitest
```

Fails with

```bash
FAIL   nuxt  ../test/nuxt/foo.test.ts [ test/nuxt/foo.test.ts ]
SyntaxError: Named export 'PaletteColorUtility' not found. The requested module '../../@dt/dvchart.cjs' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '../../@dt/dvchart.cjs';
const { PaletteColorUtility: EQe, FlexDV: MQe } = pkg;

 ❯ plugins/ar-vue.ts:1:1
      1| import { Viewer } from "@mescius/activereportsjs-vue";
       | ^
      2|
      3| export default defineNuxtPlugin(() => {

```
