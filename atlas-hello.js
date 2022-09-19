#! /usr/bin/env node

const os = require('os');
const path = require('path');

if (require.main == module) {
  const username = path.basename(os.homedir());
  console.log("hello %s!", username);
}
