# [react-skycons](http://roadmanfong.github.io/react-skycons/)

skycons as React components

[![Build Status](https://travis-ci.org/roadmanfong/react-skycons.svg?branch=master)](https://travis-ci.org/roadmanfong/react-skycons) [![npm version](https://img.shields.io/npm/v/react-skycons.svg?style=flat-square)](https://www.npmjs.com/package/react-skycons) [![npm downloads](https://img.shields.io/npm/dm/react-skycons.svg?style=flat-square)](https://www.npmjs.com/package/react-skycons)

See [Demo](https://codesandbox.io/s/react-skycons-demo-r6309) here

## Installation

Install via [npm](https://www.npmjs.com/package/react-skycons)

```cli
$ yarn add react-skycons
```

## Quick Example

```js
import React from 'react'
import Skycons, { SkyconsType } from 'react-skycons'

function Demo() {
  const svgProps = {
    style: { backgroundColor: 'blue' },
  }

  return (
    <Skycons
      color="white"
      type={SkyconsType.CLEAR_DAY}
      animate={true}
      size={24}
      resizeClear={true}
      {...svgProps}
    />
  )
}
```

## Build

```cli
yarn run build
```

## Author

Fong Kuanghuei(waneblade@gmail.com)

## License

MIT
