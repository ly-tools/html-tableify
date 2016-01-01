'use strict';

const capitalize = require('capitalize');
const defaults = require('lodash.defaults');
const forEach = require('lodash.foreach');
const pretty = require('pretty');

const DEFAULT_CONFIG = {
  tidy: true,
  headers: null
};

module.exports = (data, config) => {
  if (!Array.isArray(data)) throw new Error('html-tableify: Data must be array of object.');
  config = defaults(config || {}, DEFAULT_CONFIG);
  if (!config.headers) {
    let headers = [];
    forEach(data[0] || {}, (value, key) => headers.push({
      name: key
    }));
    config.headers = headers;
  }
  let $heads = config.headers.map(hd => `<th style="text-align: ${hd.align || 'center'}">${hd.title || capitalize(hd.name)}</th>`);
  let $header = `<thead><tr>${$heads.join('')}</tr></thead>`;
  let $rows = data.map(rowData => {
    let $tds = config.headers.map(hd => `<td style="text-align: ${hd.align || 'center'}">${rowData[hd.name] || ''}</td>`);
    return `<tr>${$tds.join('')}</tr>`;
  });
  let $body = `<tbody>${$rows.join('')}</tbody>`;
  let rst = `<table>${$header}${$body}</table>`;
  return config.tidy ? pretty(rst) : rst;
};
