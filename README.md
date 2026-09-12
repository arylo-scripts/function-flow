# function-flow

A small typed left-to-right function composition helper.

## Install

```sh
npm install @arylo-scripts/function-flow
```

## Usage

```ts
import flow from '@arylo-scripts/function-flow'

const result = flow(1, (value) => String(value), (value) => value.length)
```

`flow` passes the result of each function to the next function from left to
right. TypeScript overloads preserve the value type through supported chains.

## Development

```sh
npm install
npm run lint
npm run build
```
