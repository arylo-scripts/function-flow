# function-flow

A small typed left-to-right function composition helper.

## Install

```sh
npm install github:arylo-scripts/function-flow
```

## Usage

```ts
import flow from '@arylo-scripts/function-flow'

const result = flow(1, (value) => String(value), (value) => value.length)
```

## Development

```sh
npm install
npm run lint
npm run build
```
