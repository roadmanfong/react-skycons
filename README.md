# [react-skycons](http://roadmanfong.github.io/react-skycons/)

skycons as React components

[Demo](http://roadmanfong.github.io/react-skycons/example/)

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
  return (
    <Skycons
      color="grey"
      type={SkyconsType.CLEAR_DAY}
      animate={true}
      size={24}
      resizeClear={true}
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
