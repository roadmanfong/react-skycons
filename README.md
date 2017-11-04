# [react-skycons](http://roadmanfong.github.io/react-skycons/)
skycons as React components

[Demo](http://roadmanfong.github.io/react-skycons/example/)


## Installation
Install via [npm](https://www.npmjs.com/package/react-skycons)

```
yarn add react-skycons
```


## Quick Example

```js
var Skycons = require('react-skycons');
import React from 'react'
import Skycons from 'react-skycons'

class Demo extends React.Component {
  render () {
    return (
      <Skycons 
        color='white' 
        icon='PARTLY_CLOUDY_DAY' 
        autoplay={false}
      />
    )
  }
}
```


## Build

```cli
yarn run build
```

build example

```cli
yarn run example
```


## Author
Fong Kuanghuei(waneblade@gmail.com)

## License
MIT
