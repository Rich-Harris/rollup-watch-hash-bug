# rollup watch hash bug

Install dependencies and do `npm run dev`. Notice that two files are created:

```
dist/main.67c2222f.js
dist/foo.5cdff7e0.js
```

Change something in `src/foo.js` (e.g. `'hello'` -> `'hello!!!'`). Rollup restarts, and creates this new file:

```
dist/foo.81ae050e.js
```

Inspect `dist/main.67c2222f.js` and you'll see that it correctly references the new file. Since its contents changed, its own hash should also have changed, but it didn't.