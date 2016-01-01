'use strict';

require('should');
const tableify = require('../index');

describe('html-tableify', () => {
  it('Normal', () => {
    return tableify([{
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
    }).trim().should.be.eql(`
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
    `.trim());
  });
  it('No headers', () => {
    return tableify([{
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
    }]).trim().should.be.eql(`
<table>
  <thead>
    <tr>
      <th style="text-align: center">Name</th>
      <th style="text-align: center">Description</th>
      <th style="text-align: center">Required</th>
      <th style="text-align: center">Type</th>
      <th style="text-align: center">DefaultValue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">optionalArray</td>
      <td style="text-align: center">Description of optionalArray.</td>
      <td style="text-align: center"></td>
      <td style="text-align: center">array</td>
      <td style="text-align: center">[]</td>
    </tr>
    <tr>
      <td style="text-align: center">optionalBool</td>
      <td style="text-align: center">Description of optionalBool.</td>
      <td style="text-align: center"></td>
      <td style="text-align: center">bool</td>
      <td style="text-align: center">false</td>
    </tr>
  </tbody>
</table>
    `.trim());
  });
  it('Not tidy', () => {
    return tableify([{
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
    }).trim().should.be.eql(`<table><thead><tr><th style="text-align: center">Name</th><th style="text-align: center">Description</th><th style="text-align: center">Required</th><th style="text-align: center">Type</th><th style="text-align: center">DefaultValue</th></tr></thead><tbody><tr><td style="text-align: center">optionalArray</td><td style="text-align: center">Description of optionalArray.</td><td style="text-align: center"></td><td style="text-align: center">array</td><td style="text-align: center">[]</td></tr><tr><td style="text-align: center">optionalBool</td><td style="text-align: center">Description of optionalBool.</td><td style="text-align: center"></td><td style="text-align: center">bool</td><td style="text-align: center">false</td></tr></tbody></table>`.trim());
  });
  it('Error when no data', () => {
    return (() => {
      tableify();
    }).should.throw(Error, {
      message: 'html-tableify: Data must be array of object.'
    });
  });
  it('Empty', () => {
    return (() => {
      tableify([]);
    }).should.not.throw(Error);
  });
});
