[![version](https://img.shields.io/npm/v/rollup-plugin-rewrite.svg)]()  [![license](https://img.shields.io/github/license/armujahid/rollup-plugin-rewrite.svg)]()

# 🔎 `rollup-plugin-rewrite`

Modify rollup output with find / replace dynamically. It is similar to [rollup-plugin-modify](https://www.npmjs.com/package/rollup-plugin-modify) but uses `renderChunk` hook to transform final processed output for each chunk

## Usage

```bash
npm i rollup-plugin-rewrite
```

Find and replace using regex
```js
import rewrite from 'rollup-plugin-rewrite'

export default {
  plugins: [
    rewrite({
      find: RegExp,
      replace: Function
    })
  ]
}
```

#### Example (replace method argument)

following code will replace `importShim(./bla)` to `importShim(./publicPath/bla)` 

```js
rewrite({
  find: /importShim\(([^)]*)\)/mg,
  replace: (match) => `importShim("./publicPath/${match[1].substr(3)})`
})
```

I use this snippet to update paths of dynamic imports during build time