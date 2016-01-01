# html-tableify

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/html-tableify.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/html-tableify?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/html-tableify.png)](https://travis-ci.org/LingyuCoder/html-tableify)
[![Dependency Status](https://david-dm.org/LingyuCoder/html-tableify.svg)](https://david-dm.org/LingyuCoder/html-tableify)
[![devDependency Status](https://david-dm.org/LingyuCoder/html-tableify/dev-status.svg)](https://david-dm.org/LingyuCoder/html-tableify#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/html-tableify.svg?style=flat-square)](http://npmjs.org/package/html-tableify)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/html-tableify.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/html-tableify.svg?style=flat-square)](https://npmjs.org/package/html-tableify)

Convert json to HTML table

## Installation

```bash
$ npm install --save html-tableify
```

## Usage

`tableify(data[, config]);`

* data:Array(Object) => data of the table
* config:Object => configuration
  * config.tidy:Boolean => tidy the output HTML or not
  * config.headers:Array(Object) => Headers config
    * header.name:String => key in data object
    * header.align:Enum('left'|'right'|'center') => text align of the column
    * header.title:String => title of the column

```javascript
const tableify = require('html-tableify');

tableify([{
  name: 'optionalArray',
  description: 'Description of optionalArray.',
  required: '',
  type: 'array',
  defaultValue: '[]'
}, {
  name: 'optionalBool',
  description: 'Description of optionalBool.',
  required: '',
  type: 'bool',
  defaultValue: 'false'
}], {
  headers: [{
    name: 'name',
    align: 'left',
    title: 'Your Name'
  }, {
    name: 'description',
    align: 'left'
  }, {
    name: 'type',
    align: 'left'
  }, {
    name: 'required',
    align: 'center'
  }, {
    name: 'defaultValue',
    align: 'center',
    title: 'Default Value'
  }]
});
/*
<table>
  <thead>
    <tr>
      <th style="text-align: left">Your Name</th>
      <th style="text-align: left">Description</th>
      <th style="text-align: left">Type</th>
      <th style="text-align: center">Required</th>
      <th style="text-align: center">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">optionalArray</td>
      <td style="text-align: left">Description of optionalArray.</td>
      <td style="text-align: left">array</td>
      <td style="text-align: center"></td>
      <td style="text-align: center">[]</td>
    </tr>
    <tr>
      <td style="text-align: left">optionalBool</td>
      <td style="text-align: left">Description of optionalBool.</td>
      <td style="text-align: left">bool</td>
      <td style="text-align: center"></td>
      <td style="text-align: center">false</td>
    </tr>
  </tbody>
</table>
*/

tableify([{
 name: 'optionalArray',
 description: 'Description of optionalArray.',
 required: '',
 type: 'array',
 defaultValue: '[]'
}, {
 name: 'optionalBool',
 description: 'Description of optionalBool.',
 required: '',
 type: 'bool',
 defaultValue: 'false'
}], {
 tidy: false
});

// <table><thead><tr><th style="text-align: center">Name</th><th style="text-align: center">Description</th><th style="text-align: center">Required</th><th style="text-align: center">Type</th><th style="text-align: center">DefaultValue</th></tr></thead><tbody><tr><td style="text-align: center">optionalArray</td><td style="text-align: center">Description of optionalArray.</td><td style="text-align: center"></td><td style="text-align: center">array</td><td style="text-align: center">[]</td></tr><tr><td style="text-align: center">optionalBool</td><td style="text-align: center">Description of optionalBool.</td><td style="text-align: center"></td><td style="text-align: center">bool</td><td style="text-align: center">false</td></tr></tbody></table>
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
