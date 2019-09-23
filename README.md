# Bind

Bind a child function to its parent.

## Installation

```bash
npm i @zhaoyao91/bind
```

## Usage

```js
const bind = require("@zhaoyao91/bind");

function add(b, c) {
  return this.a + b + c;
}

const obj = {
  a: 1,
  sum: add
};

const result = bind(obj, "sum", 2)(3);
// result === 6
```

## License

MIT
